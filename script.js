/**
 * [상태 관리 패턴 적용]
 * 1. State: 모든 데이터(상태)를 하나의 객체에서 관리
 * 2. Render: 상태를 바탕으로 UI를 업데이트하는 함수들
 * 3. Event: 사용자 상호작용 시 상태를 변경하고 Render 호출
 */

// --- 1. 상태(State) 정의 ---
const state = {
    isDarkMode: localStorage.getItem('darkMode') === 'enabled',
    isMenuOpen: false,
    repos: [],
    repoStatus: 'loading', // 'loading', 'success', 'error', 'empty'
    showScrollTop: false
};

// --- 2. UI 렌더링(Render) 함수들 ---
const render = {
    // 다크모드 UI 업데이트
    theme() {
        const toggleBtn = document.getElementById('dark-mode-toggle');
        document.body.classList.toggle('dark-mode', state.isDarkMode);
        if (toggleBtn) {
            toggleBtn.textContent = state.isDarkMode ? '☀️' : '🌙';
        }
    },

    // 햄버거 메뉴 UI 업데이트
    menu() {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active', state.isMenuOpen);
        }
    },

    // 깃허브 프로젝트 리스트 업데이트
    repos() {
        const projectGrid = document.getElementById('project-grid');
        const loadingElement = document.getElementById('loading');
        if (!projectGrid) return;

        // 상태에 따른 조건부 렌더링
        if (state.repoStatus === 'loading') {
            if (loadingElement) loadingElement.innerText = "데이터를 불러오는 중입니다...";
        } else if (state.repoStatus === 'error') {
            projectGrid.innerHTML = '<p class="error-message">데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</p>';
        } else if (state.repoStatus === 'empty') {
            projectGrid.innerHTML = '<p class="empty-message">공개된 GitHub 저장소가 없습니다.</p>';
        } else {
            // 성공 상태: filter와 map을 활용한 동적 HTML 생성
            const cardHTML = state.repos
                .filter(repo => repo.description !== null) // 설명이 있는 것만 표시
                .map(repo => `
                    <div class="project-card">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || '설명이 없습니다.'}</p>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">자세히 보기</a>
                    </div>
                `).join('');
            
            projectGrid.innerHTML = cardHTML;
            if (loadingElement) loadingElement.remove(); // 로딩 메시지 제거
        }
    },

    // 스크롤 탑 버튼 업데이트
    scroll() {
        const scrollTopBtn = document.getElementById("scroll-top");
        if (scrollTopBtn) {
            scrollTopBtn.style.display = state.showScrollTop ? "block" : "none";
        }
    }
};

// --- 3. 이벤트 리스너 및 로직 ---

// [초기화] 페이지 로드 시 테마 즉시 적용 (깜빡임 방지)
render.theme();

// [다크모드 토글]
const toggleBtn = document.getElementById('dark-mode-toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        state.isDarkMode = !state.isDarkMode; // 1. 상태 변경
        localStorage.setItem('darkMode', state.isDarkMode ? 'enabled' : 'disabled');
        render.theme(); // 2. UI 업데이트
    });
}

// [햄버거 메뉴 토글]
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        state.isMenuOpen = !state.isMenuOpen; // 1. 상태 변경
        render.menu(); // 2. UI 업데이트
    });
}

// [스크롤 이벤트]
window.addEventListener('scroll', () => {
    // 300px 이상 스크롤 시 버튼 표시 상태 변경
    const shouldShow = window.scrollY > 300;
    if (state.showScrollTop !== shouldShow) {
        state.showScrollTop = shouldShow; // 1. 상태 변경
        render.scroll(); // 2. UI 업데이트
    }
});

// [스크롤 탑 클릭]
document.getElementById("scroll-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// [GitHub API 연동]
async function getRepos() {
    const username = 'jin1732';
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        state.repos = data; // 1. 상태 변경
        state.repoStatus = data.length === 0 ? 'empty' : 'success';
    } catch (error) {
        console.error("에러 발생:", error);
        state.repoStatus = 'error'; // 1. 에러 상태 변경
    } finally {
        render.repos(); // 2. UI 업데이트
    }
}
getRepos();

// [Contact 폼 유효성 검사]
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || email === "") {
            alert("이름과 이메일을 모두 입력해주세요!");
        } else if (!emailPattern.test(email)) {
            alert("올바른 이메일 형식을 입력해주세요!");
        } else {
            alert("메시지가 성공적으로 전송되었습니다!");
            contactForm.reset();
        }
    });
}

// [스크롤 애니메이션] Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach((el) => observer.observe(el));
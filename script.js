// [1순위] 설정 확인 및 즉시 적용 (깜빡임 방지)
const body = document.body;
const toggleBtn = document.getElementById('dark-mode-toggle');
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// 페이지 로드 시 상태 적용
if (isDarkMode) {
    body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = '☀️'; // 다크모드면 해 아이콘
} else {
    if (toggleBtn) toggleBtn.textContent = '🌙'; // 라이트모드면 달 아이콘
}

// [2순위] 클릭 이벤트 리스너
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isNowDark = body.classList.toggle('dark-mode');
        
        if (isNowDark) {
            localStorage.setItem('darkMode', 'enabled');
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleBtn.textContent = '🌙';
        }
    });
}

// 데이터를 가져오는 함수
const username = 'jin1732';
const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated`;

async function getRepos() {
    const loadingElement = document.getElementById('loading');
    const projectGrid = document.getElementById('project-grid');

    try {
        const response = await fetch(apiUrl);
        
        // 응답 상태 확인 (404, 500 에러 등 방지)
        if (!response.ok) {
            throw new Error('데이터를 가져오는 데 실패했습니다.');
        }

        const repos = await response.json();

        // 1. 로딩 메시지 제거
        if (loadingElement) {
            loadingElement.remove();
        }

        // 2. 빈 상태(Empty State) 처리: 저장소가 0개일 때
        if (repos.length === 0) {
            projectGrid.innerHTML = '<p class="empty-message">공개된 GitHub 저장소가 없습니다.</p>';
            return; 
        }

        // 3. 데이터가 있을 때만 화면에 표시
        displayRepos(repos);

    } catch (error) {
        console.error("에러 발생:", error);
        // 에러 발생 시 사용자에게 알림
        if (loadingElement) {
            loadingElement.innerText = "데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.";
        } else if (projectGrid) {
            projectGrid.innerHTML = '<p class="error-message">데이터를 불러오지 못했습니다.</p>';
        }
    }
}

function displayRepos(repos) {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;

    // 1. filter: 설명(description)이 있는 프로젝트만 골라내기
    const filteredRepos = repos.filter(repo => repo.description !== null);

    // 2. map: 데이터 배열을 HTML 문자열 배열로 변환하기
    const cardHTML = filteredRepos.map(repo => `
        <div class="project-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || '설명이 없습니다.'}</p>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">자세히 보기</a>
        </div>
    `).join(''); // 3. join: 배열을 하나의 긴 문자열로 합치기

    // 4. 화면 업데이트: 한 번에 쏙 집어넣기
    projectGrid.innerHTML = cardHTML;
}
getRepos() 

const contactForm = document.getElementById('contact-form');

// 폼이 존재할 때만 실행하도록 감싸줍니다.
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // 1. 이메일 형식을 검사하는 정규식
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name === "" || email === "") {
            // 이름이나 이메일이 비어있을 때
            alert("이름과 이메일을 모두 입력해주세요!");
        } else if (!emailPattern.test(email)) {
            // 이메일 형식이 올바르지 않을 때
            alert("올바른 이메일 형식을 입력해주세요! (예: user@mail.com)");
        } else {
            // 모든 조건이 통과되었을 때
            alert("메시지가 성공적으로 전송되었습니다!");
            contactForm.reset();
        }
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // 화면에 보이면 'show' 클래스 추가
        } else {
            // (선택사항) 화면에서 벗어나면 다시 숨기고 싶을 때 아래 주석 해제
            // entry.target.classList.remove('show'); 
        }
    });
});

// 모든 section 태그를 관찰 대상으로 등록
const sections = document.querySelectorAll('section');
sections.forEach((el) => observer.observe(el));

// HTML에 있는 메뉴 버튼과 메뉴 리스트를 가져옵니다.
const menuToggle = document.querySelector('.menu-toggle'); // 또는 .hamburger
const navLinks = document.querySelector('.nav-links');

// 버튼을 클릭했을 때 실행
menuToggle.addEventListener('click', () => {
    // nav-links에 active 클래스를 넣었다 뺐다(toggle) 합니다.
    navLinks.classList.toggle('active');
});

const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener('scroll', () => {
    // 스크롤 값이 300보다 크면 보이고, 작으면 숨김
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
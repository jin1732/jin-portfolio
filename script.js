// [1순위] 설정 확인 및 즉시 적용 (깜빡임 방지)
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
    // 주의: 버튼 아이콘 변경은 아래에서 버튼을 찾은 뒤에 해야 함
}

// [2순위] HTML 요소 가져오기
const toggleBtn = document.getElementById('dark-mode-toggle');

// [3순위] 초기 버튼 상태 설정 (다크모드라면 해 아이콘으로)
if (isDarkMode && toggleBtn) {
    toggleBtn.textContent = '☀️';
}

// [4순위] 이벤트 리스너 (사용자 클릭 대기)
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // ... 이하 생략
    });
}

// 데이터를 가져오는 함수
const username = 'jin1732';
const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated`;

async function getRepos() {
    try {
        const response = await fetch(apiUrl);
        const repos = await response.json();

        // 로딩 메시지 숨기기
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {loadingElement.remove();
        }

        displayRepos(repos);
    } catch (error) {
        console.error("에러 발생:", error);
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
        loadingElement.innerText = "데이터를 불러오지 못했습니다.";
        }
    }
}

// 화면에 프로젝트를 그려주는 함수
function displayRepos(repos) {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;

    projectGrid.innerHTML = '';

    repos.forEach(repo => {
        // 2. 새로운 div(카드) 생성
        const card = document.createElement('div');
        // ★ 중요: 여기서 HTML에는 없던 'project-card' 클래스를 부여합니다!
        card.className = 'project-card';

        // 3. 카드 내부에 들어갈 내용 작성
        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || '설명이 없습니다.'}</p>
            <a href="${repo.html_url}" target="_blank">자세히 보기</a>
        `;
        // 4. 완성된 카드를 project-grid 안에 넣기
        projectGrid.appendChild(card);
    });
}
getRepos()
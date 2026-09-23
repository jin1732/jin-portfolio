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
        document.getElementById('loading').innerText = "데이타불러오지 못했습니다.";
    }
}

// 화면에 프로젝트를 그려주는 함수
function displayRepos(repos) {
    const projectGrid = document.getElementById('project-grid');
    const loadingElement = document.getElementById('loading');

    if (loadingElement) loadingElement.style.display = 'none';

    projectGrid.innerHTML = '';

    repos.forEach(repo => {
        // 2. 새로운 div(카드) 생성
        const card = document.createElement('div');
        // ★ 중요: 여기서 HTML에는 없던 'project-card' 클래스를 부여합니다!
        card.className = 'project-card';

        // 3. 카드 내부에 들어갈 내용 작성
        card.innerHTML = `
            <h3>${repo.name}<h3>
            <p>${repo.description || '설명이 없습니다.'}<p>
            <a href="${repo.html_url}" target="_blank">자세히 보기</a>
        `;
        // 4. 완성된 카드를 project-grid 안에 넣기
        projectGrid.appendChild(card);
    });
}
getRepos()
// 데이터를 가져오는 함수
const username = 'jin1732';
const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated`;

async function getRepos() {
    try {
        const response = await fetch(apiUrl);
        const repos = await response.json();

        console.log(repos);
        displayRepos(repos);
    } catch (error) {
        console.error("데이타를 가져오는 중 에러 발생:", error);
    }
}

// 화면에 프로젝트를 그려주는 함수
function displayRepos(repos) {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = '';

    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${repo.name}<h3>
            <p>${repo.description || '설명이 없습니다.'}<p>
            <a href="${repo.html_url}"target="_blank">자세히 보기</a>
        `;
        projectGrid.appendChild(card)
    });
}
getRepos()
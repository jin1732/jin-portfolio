# 디자이너 포트폴리오 웹사이트
### 이 프로젝트는 저의 디자인 작업물과 기술 스택을 소개하기 위한 개인 포트폴리오 웹사이트입니다. HTML5를 사용하여 웹 표준에 맞는 시맨틱한 구조로 제작되었습니다.

---

>## 1. 실행 환경
- OS: macOS Sequoia 15.7.4
- Editor: VS Code(Live Server 확장 프로그램 사용)
- Browser: Chrome 

>## 2. 설계 및 뼈대 잡기 (HTML)
- **시맨틱 마크업(Semantic Markup) 이해 및 적용**
- **HTML5**: 웹사이트의 뼈대 구성
- <header>, <nav> : 상단 메뉴 및 네비게이션
- <main>, <section> : 주요 콘텐츠 영역 구분
- <footer> : 저작권 및 연락처 정보
- <h1>`~`<h6> : 제목 계층 구조
- <p> : 본문 문단 작성

```zsh
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>jin portfolio</title>
</head>
<body>
     <!-- 로고와 메뉴가 들어갈 곳 -->
    <header>
        <h1>Jin's Portfolio</h1> <!-- 로고 대신 이름을 넣었어요 -->
        <nav>
            <ul>
                <li><a href="#hero">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#design-works">WORKS</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="hero"> <!-- 나를 소개하는 첫 화면 -->
            <h2>안녕하세요, 디자이너 Jin입니다.</h2>
            <p>사용자의 경험을 디자인하는 UI/UX 디자이너입니다.</p>
        </section>
        <section id="about"> <!-- 상세 소개 -->
            <h2>ABOUT</h2>
            <img src="profile.jpg" alt="프로필 사진">
            <p>
                안녕하세요! 저는 사용자 중심의 인터페이스를 고민하는 디자이너 Jin입니다.<br>
                복잡한 문제를 단순하고 아름답게 해결하는 것을 좋아합니다.
            </p>
        </section>
        <section id="skills"> <!-- 기술 스택 -->
            <h2>SKILLS</h2>
            <ul>
                <li><strong>Design:</strong>Adobe Photoshop, Illustrator</li>
                <li><strong>Web design:</strong> HTML, CSS, JavaScript</li>
                <li><strong>Tools:</strong> Notion, Git</li>
            </ul>
        </section>
        <section id="design-works"> <!-- 프로젝트 모음 -->
            <h2>WORKS</h2>
            <div class="works-item">
                <img src="https://via.placeholder.com/300x200" alt="프로젝트 1">
                <h3>프로젝트 제목 1</h3>
                <p>프로젝트에 대한 짧은 설명입니다. 어떤 문제를 해결했는지 적어보세요.</p>
            </div>

            <div class="works-item">
                <img src="https://via.placeholder.com/300x200" alt="프로젝트 1">
                <h3>프로젝트 제목 1</h3>
                <p>프로젝트에 대한 짧은 설명입니다. 어떤 문제를 해결했는지 적어보세요.</p>
            </div>
        </section>
    </main>
    <footer> <!-- 연락처 및 저작권 정보 -->
        <P>&copy; 2024. [손희진]. All rights reserved.</P>
        <p>Email: your-email@example.com</p>
    </footer>
</body>
</html>
```
### 학습한 주요 용어
- **시맨틱 마크업 (Semantic Markup)**: 태그의 의미를 명확히 하여 구조를 설계함 (header, main, footer 등).
- **태그 쌍 (Tag Pair)**: 열기 태그와 닫기 태그를 통해 콘텐츠의 범위를 지정함.
- **주석 (Comment)**: <!-- -->를 활용해 코드의 가독성을 높이고 설명을 기록함.

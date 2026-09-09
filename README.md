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
- header, nav : 상단 메뉴 및 네비게이션
- main, section : 주요 콘텐츠 영역 구분
- footer : 저작권 및 연락처 정보
- h1~h6 : 제목 계층 구조
- p : 본문 문단 작성

```html
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

>## 3. 스타일링 및 레이아웃 (CSS)

### ①CSS(Cascading Style Sheets) 기초 
- HTML 문서에 style.css 파일 연결 (<link> 태그 사용)
- 선택자(Selector), 속성(Property), 값(Value)의 기본 문법 이해
- 색상 코드(Hex)와 크기 단위(px, rem) 적용

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* 헤더 스타일 */
header {
    background: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

/* 내비게이션 바 스타일 */
nav {
    background-color: #333;
    padding: 1rem;
    text-align: center;
}

nav a {
    color: white;
    text-decoration: none; /* 밑줄 제거 */
    margin: 0 15px;        /* 메뉴 간격 */
    font-weight: bold;
}

/* 마우스를 올렸을 때 효과 */
nav a:hover {
    color: #ffcc00;      /* 색상 변경 */
    text-decoration: underline;
}

/* 섹션 스타일 */
section {
    padding: 20px;
    margin: 10px;
    background: #fff;
}
```

### 학습한 주요 용어
- **CSS 초기화 (Reset CSS)**: 브라우저마다 기본적으로 가지고 있는 여백(margin, padding)을 제거하여 모든 브라우저에서 동일한 디자인이 보이도록 설정하는 것 (예: * { margin: 0; ... }).
- **박스 모델 (Box Model)**: 모든 HTML 요소를 사각형 박스로 간주하고, margin(바깥 여백), padding(안쪽 여백), border(테두리)로 구성하는 개념.
- **box-sizing: border-box**: 박스의 크기를 계산할 때 padding과 border를 포함하여, 설정한 너비(width)가 변하지 않게 고정해 주는 속성.
- **선택자 (Selector)**: 스타일을 적용할 HTML 요소를 선택하는 방법 (예: 태그 선택자 header, 전체 선택자 *).
- **가상 클래스 (Pseudo-class)**: 요소의 특정 상태에 스타일을 적용할 때 사용 (예: :hover는 마우스를 올렸을 때의 상태).
- **단위 (Units)**: px: 고정된 픽셀 단위. rem: 루트(최상위) 요소의 글자 크기를 기준으로 하는 상대적 단위 (반응형 디자인에 유리).

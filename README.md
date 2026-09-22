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
        <p>&copy; 2024. [손희진]. All rights reserved.</p>
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


### ② Flexbox를 활용한 레이아웃 설계 
- Flexbox 활용: display: flex를 사용하여 요소들을 가로/세로로 자유롭게 배치.
- 2x2 카드 배열: flex-wrap: wrap과 calc() 함수를 사용하여 화면 크기에 맞는 반응형 2열 구조 생성.
- 정밀한 크기 계산: width: calc(50% - 16px)를 사용하여 카드 사이의 간격을 유지하며 정확히 2등분함.
- 정렬과 간격: justify-content와 gap 속성을 사용하여 카드 사이의 일정한 여백 구현.

```html
                <div class="projects-card">
                    <div class="card-top">
                        <a href="#" class="repo-name">my-docker2</a>
                        <span class="badge">Public</span>
                    </div>
                    <div class="card-bottom">
                        <span class="lang-dot html"></span>
                        <span class="lang-text">HTML</span>
                    </div>
                </div>
```
```css
/* 헤더 부분 (글자와 링크 양옆 배치) */
.projects-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

/* 카드 컨테이너 (2개씩 배치하는 핵심!) */
.projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

/* 개별 카드 스타일 */
.projects-card{
    flex: 1 1 calc(50% - 8px);   /* 한 줄에 2개씩 */
    border: 1px solid #d0d7de; /* 테두리 */
    border-radius: 6px;          /* 모서리 둥글게 */
    padding: 16px;
    display: flex;
    flex-direction: column;      /* 위아래로 배치(열) */
    justify-content: space-between;
    min-height: 100px;
}

/* 카드 내부 상세 스타일 */
.repo-name {
    color: #0969da;
    text-decoration: none;
    font-weight: bold;
}

.badg {
    font-size: 12px;
    border: 1px solid #d0d7de;
    border-radius: 10px;
    padding: 2px 8px;
    color: #57606a;
}
```

### 학습한 주요 용어
- **Flexbox (플렉스박스)**: 복잡한 레이아웃을 쉽고 유연하게 배치할 수 있도록 돕는 CSS의 1차원 레이아웃 모델.
- **flex-wrap**: 컨테이너 안의 요소들이 화면을 넘어갈 때, 다음 줄로 자연스럽게 줄바꿈을 할지 결정하는 속성 (wrap 적용 시 줄바꿈됨).
- **justify-content**: 메인 축(주로 가로 방향)을 기준으로 요소들을 어떻게 정렬할지 결정하는 속성 (예: space-between, center 등).
- **gap**: Flex 요소들 사이의 여백(간격)을 일정하게 설정해 주는 속성으로, 복잡한 margin 계산을 대체할 수 있어 매우 유용함.
- **calc() 함수**: CSS 내부에서 사칙연산(+, -, *, /)을 수행하여 너비나 높이 등의 값을 동적으로 계산하는 함수 (예: calc(50% - 16px)).


### ③ 반응형 웹 디자인 (Responsive Web Design) 및 미디어 쿼리
- Media Query 적용: @media (max-width: 480px)를 사용하여 모바일 화면(480px 이하)에 맞는 레이아웃으로 변경했습니다.
- 모바일 최적화: 모바일 환경에서 글자 크기(font-size)와 여백(padding)을 줄이고, 내비게이션 메뉴를 세로(column)로 배치하여 가독성을 높였습니다.
- 반응형 테스트: Chrome 개발자 도구(DevTools)의 Device Mode를 활용하여 400px 등 다양한 모바일 기기 해상도에서 레이아웃이 깨지지 않는지 확인 및 디버깅을 진행했습니다.

```css
@media (max-width: 768px) {
    .projects-container {
        flex-direction: column;
    }
    .projects-card {
        flex: 1 1 100%;
    }
    .projects-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px
    }
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    header {
        padding: 16px;
    }
    nav ul {
        flex-direction: column;
        gap: 8px;
    }
    .projects-card {
        padding: 16px;
    }
    .projects-header h2 {
        font-size: 20px;
    }
    .projects-header a {
        font-size: 14px;
    }
}
```
### 학습한 주요 용어
- **반응형 웹 (Responsive Web)**: PC, 태블릿, 스마트폰 등 접속하는 기기의 화면 크기에 맞춰 레이아웃이 자동으로 변하는 웹사이트 디자인 기법.
- **미디어 쿼리 (Media Query)**: 화면의 너비(width)나 해상도에 따라 다른 CSS 스타일을 적용할 수 있게 해주는 CSS 문법 (예: `@media (max-width: 480px)`).
- **중단점 (Breakpoint)**: 미디어 쿼리에서 레이아웃이나 스타일이 바뀌는 기준이 되는 화면의 픽셀 값 (예: 480px, 768px 등).
- **뷰포트 (Viewport)**: 사용자의 기기 화면에서 실제 웹페이지가 표시되는 영역. (HTML <head> 태그 안에 <meta name="viewport">를 설정해야 모바일에서 정상적으로 반응형이 작동함).
- **개발자 도구 (DevTools)**: 브라우저(Chrome 등)에서 제공하는 도구로, 'Device Mode'를 통해 다양한 모바일 기기의 화면 크기(예: 400px)를 시뮬레이션하고 실시간으로 CSS를 테스트할 수 있음.
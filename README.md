# 🎥 레거시 필름 (Legacy Film) - 프리미엄 가족 다큐멘터리 & 신앙 유산 홈페이지

이 프로젝트는 가족의 역사, 인생 기록, 신앙 간증을 영화 같은 다큐멘터리로 담아내는 **레거시 필름**의 공식 홈페이지입니다. 
구글 Gemini 3.5 Flash API를 활용하여 실시간으로 부모님 맞춤형 다큐멘터리 기획안과 인터뷰 질문지를 생성해 주는 인터랙티브 기능이 포함되어 있습니다.

---

## 🛠️ 개발 환경 구축 및 로컬 실행 방법

### 1. 필수 프로그램 설치
* **Node.js**: 프로젝트의 의존성 설치 및 로컬 서버 실행을 위해 Node.js가 필요합니다. [nodejs.org](https://nodejs.org/)에서 **LTS(장기 지원) 버전**을 다운로드하여 설치해 주세요.
* **Git**: 소스코드 버전 관리 및 GitHub 연동을 위해 Git이 필요합니다. 
  * *터미널 명령어에 익숙하시다면 macOS Command Line Tools를 설치해 터미널 Git을 사용하실 수 있습니다.*
  * *GUI 도구가 편하시다면 이미 컴퓨터에 설치된 **GitKraken**을 이용해 이 폴더를 여시는 것을 권장합니다.*

### 2. 패키지 의존성 설치
터미널을 열고 본 프로젝트 폴더로 이동한 후 다음 명령어를 입력하여 필요한 라이브러리를 설치합니다.
```bash
npm install
```

### 3. API 키 설정 (중요)
1. 프로젝트 루트에 생성된 `.env.local` 파일을 엽니다.
2. `GEMINI_API_KEY=""` 부분의 따옴표 안에 발급받은 Gemini API Key를 붙여넣습니다.
   * *API 키가 없는 경우 [Google AI Studio](https://aistudio.google.com/)에서 무료로 발급받으실 수 있습니다.*

### 4. 로컬 서버 실행
환경 변수 설정이 완료되면 아래 명령어로 개발 서버를 구동합니다.
```bash
npm run dev
```
서버가 켜지면 브라우저를 열고 `http://localhost:3000`으로 접속하여 홈페이지를 확인하실 수 있습니다.

---

## 🐙 GitHub 저장소 연동 및 첫 업로드 방법

### 터미널(Git CLI)을 사용하는 경우

1. **GitHub에 빈 저장소 생성**
   * GitHub 로그인 후 우측 상단의 `New` 버튼을 클릭하여 `legacy-film`이라는 이름의 저장소를 만듭니다. (README.md, .gitignore 등은 추가하지 않고 빈 상태로 생성합니다.)

2. **로컬 저장소 초기화 및 첫 커밋**
   * 터미널에서 다음 명령어를 차례로 입력합니다:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 레거시 필름 홈페이지 구성"
   ```

3. **원격 저장소(GitHub) 연결 및 업로드**
   * GitHub에서 생성한 저장소의 HTTPS 주소를 복사한 뒤 아래 명령어를 입력합니다 (주소 부분에 실제 본인의 저장소 주소를 대입해 주세요):
   ```bash
   git branch -M main
   git remote add origin https://github.com/사용자이름/legacy-film.git
   git push -u origin main
   ```

### GitKraken을 사용하는 경우

1. **GitKraken**을 실행합니다.
2. `Open a repository` 메뉴를 선택한 뒤, 이 `레거시-필름` 폴더를 선택합니다.
3. GitKraken에서 Git 저장소 초기화(Init)를 묻는 팝업이 뜨면 진행해 줍니다.
4. 모든 파일을 스테이징(Stage all changes)한 뒤, 커밋 메시지를 적고 `Commit` 버튼을 클릭합니다.
5. GitHub 계정을 연동하여 원격 저장소(Remote)를 추가하거나 GitHub에 새 저장소를 생성하여 바로 Push하실 수 있습니다.

---

## 🎨 기술 스택 및 구조
- **Frontend**: React 19, TypeScript, Tailwind CSS, Motion (애니메이션)
- **Backend**: Express (Gemini API 프록시 처리 및 개발용 미들웨어 구성)
- **AI Engine**: Gemini 3.5 Flash (`@google/genai`)

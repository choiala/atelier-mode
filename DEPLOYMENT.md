# 배포 가이드

이 프로젝트를 무료로 배포하는 방법을 안내합니다.

## 🚀 Vercel 배포 (가장 추천)

### 방법 1: GitHub 연동 (가장 쉬움)

1. **GitHub에 코드 업로드**
   ```bash
   # 프로젝트 디렉토리로 이동
   cd my-app
   
   # Git 초기화 (아직 안 했다면)
   git init
   git add .
   git commit -m "Initial commit"
   
   # GitHub에 새 저장소 생성 후
   git remote add origin https://github.com/사용자명/저장소명.git
   git branch -M main
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 접속
   - "Sign Up" → GitHub 계정으로 로그인
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - 프로젝트 설정:
     - **Root Directory**: `my-app` 선택 (중요!)
     - Framework Preset: Next.js (자동 감지됨)
     - Build Command: `npm run build` (자동)
     - Output Directory: `.next` (자동)
   - "Deploy" 클릭

3. **완료!**
   - 몇 분 후 배포 완료
   - `https://프로젝트명.vercel.app` URL 제공
   - 이후 GitHub에 푸시할 때마다 자동 재배포

### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 디렉토리로 이동
cd my-app

# 배포 시작
vercel

# 프로덕션 배포
vercel --prod
```

## 🌐 Netlify 배포

1. **GitHub에 코드 업로드** (위와 동일)

2. **Netlify 배포**
   - https://app.netlify.com 접속
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - 빌드 설정:
     - Base directory: `my-app`
     - Build command: `npm run build`
     - Publish directory: `.next`
   - "Deploy site" 클릭

## 🚂 Railway 배포

1. **GitHub에 코드 업로드**

2. **Railway 배포**
   - https://railway.app 접속
   - "New Project" → "Deploy from GitHub repo"
   - 저장소 선택
   - Root Directory를 `my-app`으로 설정
   - 자동으로 감지되어 배포됨

## 📝 배포 전 체크리스트

- [ ] 프로젝트가 빌드되는지 확인: `npm run build`
- [ ] 환경 변수가 필요한지 확인 (필요시 `.env.example` 파일 생성)
- [ ] 이미지 파일들이 `public` 폴더에 있는지 확인
- [ ] README.md 업데이트

## 🔧 문제 해결

### 빌드 에러가 발생하는 경우
```bash
cd my-app
npm run build
```
빌드 에러를 먼저 로컬에서 해결하세요.

### 이미지가 보이지 않는 경우
- `public` 폴더에 이미지 파일이 있는지 확인
- 이미지 경로가 올바른지 확인 (`/이미지명.jpg` 형식)

### 환경 변수가 필요한 경우
- Vercel 대시보드 → Settings → Environment Variables에서 추가

## 💡 팁

- **커스텀 도메인**: Vercel 무료 플랜에서도 커스텀 도메인 연결 가능
- **자동 배포**: GitHub에 푸시하면 자동으로 재배포됨
- **프리뷰 배포**: Pull Request마다 프리뷰 URL 자동 생성
- **Analytics**: 이미 `@vercel/analytics`가 포함되어 있어 배포 후 자동으로 작동


# Daegu Homepage (260422) - Implementation and Processes

## 개발 일지 (2026년 4월 22일)

### 1. Landing Page (Home) 시각적 임팩트 고도화
*   **Gradient Shift 렌더링 물리역학 개선:** 
    *   기존 수평(Horizontal) 방식의 그라데이션 모션이 반응형 줄바꿈(Word-wrap) 발생 시 가장자리 글자("The", "AI")에 다다르지 못하는 마스킹 데드존(Dead-zone) 현상을 발견했습니다.
    *   이를 원천 해결하기 위해 그라데이션의 각도를 대각선(`-45deg`)으로 틀고 영역 길이를 최소 2배(`200%`)로 증폭시틴 후, 애니메이션 키프레임을 `background-position: 0% -> 200%` 로 강제 순환시켰습니다.
    *   결과적으로 화면이 아무리 길거나 다중 줄바꿈이 발생해도 '하얀색 코어(White Core)' 결괏값이 남김없이 텍스트를 관통하게 되었습니다.
    *   색상 대비(시안 `#00f3ff` & 딥블루 `#0011ff`)와 순백색 비중 극대화, 그리고 레이저 스윕 주기를 가장 강렬한 1초 단위로 조정하여 사이버틱한 '건설 AI 에너지' 무드를 강화했습니다.

### 2. Technology & Portfolio 페이지 UI/UX 완성
*   **통일성 있는 타이틀 스윕 효과 적용 (Gradient Shift):**
    *   `Bridging Construction Data with AI Intelligence` 섹션에 홈 랜딩 페이지의 강력한 `pulseShine` 스윕을 동일하게 이식했습니다.
*   **한국어 레이아웃 텍스트 파편화(Fragmentation) 개선:**
    *   설명 문단("나인티나인은 건설 현장에...")이 화면 크기에 의해 강제적으로 3줄로 분리되며 "가공하"와 "는"이 끊어지는 한국어 특유의 디자인 결함이 있었습니다.
    *   `max-w` 제약을 해제(`w-full`)하고, CSS `break-keep` 속성을 오버라이드하여, 오로지 기획된 `<br className="hidden md:block" />` 교차점에서만 반응형 2줄 렌더링이 이루어지도록 레이아웃 엔진 규칙을 수정했습니다.
*   **Fullscreen Image Hover Preview (몰입형 제스쳐):**
    *   텍스트 옆 사진(`aspect-video`)에 마우스를 호버 시, 해당 이미지를 트리거링하여 모니터 화면 전체(`95vw, 95vh`)로 띄우는 시네마틱 오버레이 기능을 구축했습니다.
    *   `React useState`를 사용해 최상단(`z-[200]`) 뷰포트 레이어를 활성화시킴과 동시에, 오버레이 컨테이너에 `pointer-events-none`을 주입하여 DOM 충돌 및 On/Off 플리커링(깜박임 무한루프) 현상을 우아하게 차단했습니다.

### 3. Gradient Tracing 에이전트(Framer Motion) 백그라운드 편입
*   **GradientTracing 기초 공사 및 SVG 버그 디버깅:**
    *   `framer-motion`의 코어 패키지인 `motion`을 설치하고 호환 가능한 React 컴포넌트를 이식했습니다.
    *   본래 `height="100%"`를 사용할 때 부모의 Flex/Absolute 박스모델 맥락에서 `height: 0px`으로 소실되는 WebGL/SVG 고질적 렌더링 버그를 차단하기 위해 `viewBox="0 0 100 2"` 및 명시적인 물리 픽셀 고정 크기로 코드를 리팩토링했습니다.
*   **양방향(Bi-directional) 흐름 제어 및 레이어 은폐 역학:**
    *   리스트 아이템의 인덱스 홀/짝 배열(`isImageLeft`)에 맞춰 방향 벡터가 자동으로 교차하도록 `left-to-right` / `right-to-left` 프롭스(Props) 논리를 연결했습니다.
    *   빛의 줄기가 텍스트 영역 밖 이미지 쪽을 향해 정확히 `w-[150%]` 가량 뻗어나가도록 설정하였으며, React의 렌더링 위계와 `z-index` 속성을 조율해 메인 콘텐츠의 방해 없이, 오로지 텍스트와 이미지 뒤쪽(Background) 공간 사이를 아슬아슬하게 통과하여 숨어드는 입체적 기믹을 성공적으로 연출했습니다.

### 4. Vercel 프로덕션 배포 및 TypeScript 빌드 에러 무결점 해결
*   **TypeScript Strict Mode 빌드 버그 픽스:**
    *   Vercel 배포 과정(`npm run build`)에서 발생한 엄격한 타입 에러들을 일괄 디버깅했습니다.
    *   `LandingPage`, `Technology`, `Research`, `Contact`, `interactive-neural-vortex-background` 등에서 사용되지 않는 `React` 및 `Three.js` 모듈 Import 코드를 완전히 제거(TS6133, TS6192 에러 해결)했습니다.
    *   `background-paper-shaders.tsx` 내 Three.js 메쉬(Mesh) 매터리얼의 `opacity` 속성 참조를 위해 `THREE.Material`로 명시적 타입 캐스팅을 적용하여 속성 에러(TS2339)를 해결했습니다.
    *   `demo.tsx`의 `FeatureCard` 컴포넌트 프롭스(Props)에 내재된 `any` 타입 지정을 인터페이스로 명시화하고, `hero-button-expendable.tsx` 내 존재하지 않는 CSS 스타일 속성(`wordKeep`)을 `wordBreak`으로 정정했습니다.
*   **보안 파일 깃허브(GitHub) 제외 처리:**
    *   `.gitignore` 파일에 `.initial_setting/` 디렉토리를 추가하여, API 키 및 서버 접속 권한이 포함된 중요 보안 문서(`.rule.md` 등)가 퍼블릭 저장소에 노출되지 않도록(Zero-Leakage) 원천 차단했습니다.
*   **Vercel CI/CD 파이프라인 구축 및 라이브 배포 완료:**
    *   모든 코드를 `bignine99/daegu_homepage` 저장소에 `push`하여 Vercel의 자동화 빌드 파이프라인과 연동시켰습니다.
    *   정상적인 빌드를 확인한 후, 글로벌 CDN을 거쳐 성공적으로 웹사이트 라이브 배포를 완료했습니다. (Live URL: `https://daegu-homepage-pearl.vercel.app/technology`)

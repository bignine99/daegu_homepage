
import Hero from "./ui/hero-button-expendable"

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground min-h-screen">
      <nav className="fixed top-0 w-full z-50 border-b border-border shadow-sm bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-16">
          <div className="font-mono text-lg font-bold tracking-tighter">Daegu Cho, Ph.D.</div>
          <div className="hidden md:flex gap-8 items-center font-sans tracking-tight text-sm font-medium">
            <a className="text-primary border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform" href="#profile">Profile</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform" href="#technology">Technology</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform" href="#portfolio">Portfolio</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform" href="#">Research</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform" href="#">Contact</a>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-md hover:opacity-90 transition-opacity">Consultation</button>
          </div>
          <button className="md:hidden text-foreground">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </nav>
      
      <main className="pt-16">
        <div id="landing">
          <Hero />
        </div>

        <div id="technology" className="bg-card text-card-foreground py-20 relative">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="font-data-tabular text-primary uppercase tracking-widest block mb-4">Technology & Portfolio</span>
                    <h2 className="font-headline-md text-4xl text-foreground font-black">나인티나인 혁신 기술</h2>
                </div>
            </div>
            
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden" style={{fontFamily: '"Public Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

      <div className="@container">
      <div className="@[480px]:p-4">
      <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-[5px] items-center justify-center p-4 relative" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG9YhCzbTfGwDTPG4j1DK1qlG7VzF1uxBa41VAP6C04I5mjgLd0HZHbYvuV7HQKNTMdCGPmNlNsr5wStCovnzDM2QqWbOHmtGtq7pBg0BJ7KjonPq1zo1O8U6eFYtSFoVsB8rNXEDZu77ILfv5xbBKQWVRqxS2FHHbk4TGZg3bORIft1RR8LuHexJrqdRQs_yeQbfsUZ9JmGZGWxt1_ZRoWXRSxfv5Q-Nl1jL6XUuBXZ4TybVYXmq81vXgg6DZBi-ym8adBSRBUcI")'}}>
      <div className="flex flex-col gap-2 text-center absolute z-10 w-full px-4">
      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                            데이터는 쌓아두는 것이 아니라, 말을 걸 때 비로소 자산이 됩니다.
                          </h1>
      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base mt-2">
                            나인티나인은 건설 현장의 모든 데이터를 AI가 이해할 수 있는 최적의 구조로 가공하는 완벽한 통역사입니다.
                          </h2>
      </div>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-primary-foreground text-sm font-bold leading-normal mt-32 z-10 mx-auto">
      <span className="truncate">솔루션 알아보기</span>
      </button>
      </div>
      </div>
      </div>

      <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
      <h1 className="text-foreground tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
                          나인티나인의 핵심 가치
                        </h1>
      <p className="text-foreground text-base font-normal leading-normal max-w-[720px]">혁신적인 AI 기술로 건설 현장의 패러다임을 바꿉니다.</p>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-0">
      <div className="flex flex-1 gap-3 rounded-[5px] border border-border bg-background p-4 flex-col">
      <div className="text-primary">
      <span className="material-symbols-outlined" style={{fontSize: "24px"}}>neurology</span>
      </div>
      <div className="flex flex-col gap-1">
      <h2 className="text-foreground text-base font-bold leading-tight">Alive Intelligence</h2>
      <p className="text-muted-foreground text-sm font-normal leading-normal">정적인 저장소를 넘어 사용자의 질문에 즉각 반응하는 대화형 지능.</p>
      </div>
      </div>
      
      <div className="flex flex-1 gap-3 rounded-[5px] border border-border bg-background p-4 flex-col">
      <div className="text-primary">
      <span className="material-symbols-outlined" style={{fontSize: "24px"}}>shield</span>
      </div>
      <div className="flex flex-col gap-1">
      <h2 className="text-foreground text-base font-bold leading-tight">Zero Error</h2>
      <p className="text-muted-foreground text-sm font-normal leading-normal">Graph-RAG 기반 파이프라인으로 AI 환각 현상(Hallucination) 원천 차단.</p>
      </div>
      </div>
      
      <div className="flex flex-1 gap-3 rounded-[5px] border border-border bg-background p-4 flex-col">
      <div className="text-primary">
      <span className="material-symbols-outlined" style={{fontSize: "24px"}}>bolt</span>
      </div>
      <div className="flex flex-col gap-1">
      <h2 className="text-foreground text-base font-bold leading-tight">x1,000 Speed</h2>
      <p className="text-muted-foreground text-sm font-normal leading-normal">기존 수작업 대비 1,000배 빠른 속도로 데이터를 자산화.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      {/* Services Portfolio Area */}
      <div className="w-full flex flex-col items-center pb-12 mt-12 bg-background">
      <div className="max-w-[960px] w-full px-4 flex flex-col gap-8 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Card 1: RFP & Document Agent */}
      <div className="bg-primary text-primary-foreground rounded-[5px] p-8 shadow-lg relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex flex-col h-full relative z-10">
      <div className="flex items-center gap-3 mb-6">
      <span className="material-symbols-outlined text-2xl">description</span>
      <h3 className="font-headline-md text-xl font-bold">건설 제안 입찰 AI (RFP Analyzer)</h3>
      </div>
      <ul className="flex flex-col gap-4 font-body-main text-sm">
      <li className="flex items-start gap-3">
      <span className="font-data-tabular opacity-70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span>Z-Series 멀티 에이전트 (Z0~Z7) 협업 파이프라인</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular opacity-70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span>PDF 데이터/도면 딥러닝 고해상도 추출 (JSONL 변환)</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular opacity-70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span>ChromaDB 최적화 Vector RAG 기반 전략 수립</span>
      </li>
      </ul>
      </div>
      </div>
      
      {/* Card 2: PMIS & Resource Management */}
      <div className="bg-card text-card-foreground rounded-[5px] p-8 shadow-sm border border-border relative overflow-hidden transition-transform duration-500 hover:scale-[1.01] group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex flex-col h-full relative z-10">
      <div className="flex items-center gap-3 mb-6">
      <span className="material-symbols-outlined text-2xl text-primary">account_tree</span>
      <h3 className="font-headline-md font-bold text-foreground text-xl">공정 및 원가 통합 에이전트</h3>
      </div>
      <ul className="flex flex-col gap-4 font-body-main text-sm">
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">지능형 건설 공사비 및 물량 자동 산출 시스템</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">대규모 데이터 기반 공정(Schedule) 스케줄링 최적화</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">AI-PMIS (프로젝트 관리 정보 시스템) 플랫폼 완벽 연동</span>
      </li>
      </ul>
      </div>
      </div>

      {/* Card 3: 3D Visualization & Architectural Regulation Engine */}
      <div className="bg-card text-card-foreground rounded-[5px] p-8 shadow-sm border border-border relative overflow-hidden transition-transform duration-500 hover:scale-[1.01] group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex flex-col h-full relative z-10">
      <div className="flex items-center gap-3 mb-6">
      <span className="material-symbols-outlined text-2xl text-primary">architecture</span>
      <h3 className="font-headline-md font-bold text-foreground text-xl">법규 분석 및 기하학 최적화 엔진</h3>
      </div>
      <ul className="flex flex-col gap-4 font-body-main text-sm">
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">VWorld GIS 시각화 및 지리 정보 시스템 연동 파이프라인</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">Z3 시각화 에이전트를 통합한 하이엔드 렌더링 생성 자동화</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">건축 법규 기하학 기반 건폐율/용적률 최적화 모델 (Max Envelope)</span>
      </li>
      </ul>
      </div>
      </div>

      {/* Card 4: ConSafe Dashboard */}
      <div className="bg-card text-card-foreground rounded-[5px] p-8 shadow-sm border border-border relative overflow-hidden transition-transform duration-500 hover:scale-[1.01] group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex flex-col h-full relative z-10">
      <div className="flex items-center gap-3 mb-6">
      <span className="material-symbols-outlined text-2xl text-primary">health_and_safety</span>
      <h3 className="font-headline-md font-bold text-foreground text-xl">ConSafe 지능형 현장 안전 관리</h3>
      </div>
      <ul className="flex flex-col gap-4 font-body-main text-sm">
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">CCTV 및 현장 이미지 실시간 위험요소 탐지 (Vision API)</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">다중 현장 실시간 통합 관제를 위한 고해상도 그래픽 대시보드</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="font-data-tabular text-primary/70 mt-1 scale-75 material-symbols-outlined">check_circle</span>
      <span className="text-foreground">비상 네트워킹(Mobile VCF) 및 통합 하이브리드 인프라 지원</span>
      </li>
      </ul>
      </div>
      </div>

      </div>
      
      {/* Profile Section */}
      <section id="profile" className="bg-card w-full rounded-[5px] p-8 md:p-12 border border-border shadow-sm flex flex-col md:flex-row gap-10 items-center md:items-start relative overflow-hidden mt-8">
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shrink-0 border-4 border-background shadow-md relative z-10">
      <img className="w-full h-full w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOWjdcdpKwA8jwA1_d-wJsFikZw3Q2Ufm3ZaE63-R-SJgvXl1cV_5DEavk1tafH_rvFXydDXGXe1IIZ3b7NmpAqReQAq-ZhIHKxHmLU6ixnD7d878pLm5lTHYITqAXjQiZUoC0N6Fp-WMc9wYjcv2izxrAR_P6tAgE-yxML4maoTiG3cayyijKvRf5T-3Eu-vhG3DR8Ftss9pA9l5u8PT9Tx6sxX3hKpbu7avi39Ofg2kd7T-AZGih29DtEG16rkrXg0NOHk6K7Ws" alt="Daegu Cho Ph.D." />
      </div>
      <div className="flex flex-col gap-6 relative z-10 w-full">
      <div>
      <h2 className="font-serif text-5xl text-foreground mb-2 font-black italic">Daegu Cho, Ph.D.</h2>
      <p className="text-lg text-muted-foreground tracking-tight font-medium">(주)나인티나인 대표이사 / 공학박사 / 건설사업관리 전문가</p>
      </div>
      <div className="h-[1px] w-full bg-border my-1"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mt-2">
      <div className="flex flex-col gap-3">
      <p className="font-mono text-primary tracking-widest text-xs font-bold">EDUCATION</p>
      <ul className="flex flex-col gap-2">
      <li className="font-medium text-foreground text-sm flex gap-2"><span className="text-primary">•</span> Univ. of Wisconsin-Madison Ph.D.<br/><span className="text-muted-foreground text-xs font-normal">Major: Construction Management & BIM</span></li>
      <li className="font-medium text-foreground text-sm flex gap-2"><span className="text-primary">•</span> 인하대학교 공학석사 및 학사</li>
      </ul>
      </div>
      <div className="flex flex-col gap-3">
      <p className="font-mono text-primary tracking-widest text-xs font-bold">CAREER HIGHLIGHTS</p>
      <ul className="flex flex-col gap-2">
      <li className="text-foreground text-sm flex gap-2"><span className="text-primary">•</span> 前 연우테크놀러지 기술연구소장</li>
      <li className="text-foreground text-sm flex gap-2"><span className="text-primary">•</span> 前 고려대학교 연구교수</li>
      <li className="text-foreground text-sm flex gap-2"><span className="text-primary">•</span> 한국건설관리학회 연구개발위원회 부위원장</li>
      </ul>
      </div>
      <div className="flex flex-col gap-3 md:col-span-2">
      <p className="font-mono text-primary tracking-widest text-xs font-bold">RESEARCH & EXPERTISE</p>
      <ul className="flex flex-col gap-2">
      <li className="text-foreground text-sm flex gap-2"><span className="text-primary">•</span> <span className="font-medium">핵심 역량:</span> BIM (Building Information Modeling), 공정/원가 통합관리 시스템, Big Data & AI 응용기술</li>
      <li className="text-foreground text-sm flex gap-2"><span className="text-primary">•</span> <span className="font-medium">주요 과제:</span> 건설산업 관리 빅데이터 마이그레이션 기술 개발 (국토교통부), 모듈러 건축 중고층화 기술 개발</li>
      <li className="text-foreground text-sm flex gap-2"><span className="text-primary">•</span> <span className="font-medium">특허 보유:</span> 건설 작업자 안전 모니터링 시스템, 빅데이터 기반 건설사업 정보관리 시스템 등</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
      </div>
      </main>

      <footer className="w-full border-t border-border bg-card">
        <div className="max-w-7xl mx-auto py-10 px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-foreground">
                          © 2024 Daegu Cho, Ph.D. • Construction Intelligence Architect
          </div>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <a className="hover:text-primary transition-colors" href="#">System Status</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { GradientTracing } from "../components/ui/gradient-tracing";
import { motion } from "framer-motion";

const showcaseItems = [
  { img: '/images/tech/img_01.jpg', engTitle: 'Construction Data Intelligence', title: 'AI 융합 건설 데이터 엔지니어링', desc: '건설 현장에 산재해 있는 방대한 양의 정형·비정형 데이터를 하나의 중앙집중식 시스템으로 매핑하여 언제든 즉각적인 분석과 응용이 가능한 형태로 변환합니다.'},
  { img: '/images/tech/img_02.jpg', engTitle: '5W1H CUBE Ontology Model', title: '5W1H 큐브 기반 온톨로지 모델', desc: '단순한 데이터 나열을 넘어, 공간과 시간에 기반한 고유의 5W1H 객체 속성을 정의함으로써 AI가 복잡한 건설 문서의 문맥을 스스로 파악하고 추론할 수 있게 만듭니다.'},
  { img: '/images/tech/img_03.jpg', engTitle: '12-Step Automated Pipeline', title: '무결점 12단계 자동화 파이프라인', desc: '초기 데이터베이스 로딩부터 다차원 임베딩 벡터화, RAG 기반 검색 증강을 거쳐 최종적으로 전문가 수준의 대화형 추론 결과를 도출하는 독자적인 무결점 파이프라인입니다.'},
  { img: '/images/tech/img_04.jpg', engTitle: 'Knowledge Graph Visualization', title: '다차원 지식 그래프 신경망 시각화', desc: '분석된 정보들 간의 복잡한 상관관계를 직관적인 다차원 지식 그래프로 변환하여, 인간의 눈으로는 파악하기 힘든 숨겨진 리스크와 상관성 기반 인사이트를 시야에 펼쳐줍니다.'},
  { img: '/images/tech/img_05.jpg', engTitle: 'Cost-Schedule Integration', title: '비용-일정 통합 다차원 큐브 분석', desc: '기존의 파편화된 단가표와 설계 내역을 입체적인 데이터 구조로 재배열함으로써, 향후 공정 진행에 따른 실시간 시나리오별 원가 변동을 정밀하게 예측합니다.'},
  { img: '/images/tech/img_06.jpg', engTitle: 'x1,000 High-speed Engineering', title: '1,000배 초고속 데이터 처리 기술', desc: '과거에는 수개월이 걸리던 대규모 설계 및 시공 기록의 자산화 과정을 획기적으로 고도화하여, 약 1,000배 이상 빠른 속도로 단축시키는 퀀텀 점프를 이룩했습니다.'},
  { img: '/images/tech/img_07.jpg', engTitle: 'Real-time Safety Monitoring', title: '딥러닝 기반 실시간 안전 사고 예방', desc: '2만 건 이상의 중대재해 및 안전사고 과거 이력을 딥러닝으로 학습시켜, 현재 진행 중인 현장의 작업 요건과 매칭하여 가장 치명적인 리스크를 미리 차단합니다.'},
  { img: '/images/tech/img_08.jpg', engTitle: 'Global AI Portfolio Ecosystem', title: '건설 산업 전 주기를 아우르는 AI 생태계', desc: '안전, 시공, 설계부터 학술 연구 단계에 이르기까지 총 27종 이상의 전문가형 AI 에이전트 포트폴리오를 보유하여 미래 국가 건설 경쟁력을 견고히 뒷받침합니다.'}
];

export default function Technology() {
  return (
    <div className="w-full flex flex-col bg-background min-h-screen relative">
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
        .mixed-font {
          font-family: var(--font-sans), 'Pretendard', sans-serif;
        }
        
        @keyframes pulseShine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .gradient-shift {
          background: linear-gradient(
            -45deg, 
            #0011ff 10%, 
            #00f3ff 30%, 
            #ffffff 50%, 
            #00f3ff 70%, 
            #0011ff 90%
          ) !important;
          background-size: 200% auto !important;
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          animation: pulseShine 2s linear infinite !important;
        }
        @keyframes scanLine {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .scan-line-animate {
          animation: scanLine 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .bento-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }
        @keyframes aurora1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15vw, 15vh) scale(1.2); }
          66% { transform: translate(-10vw, 20vh) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes aurora2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15vw, 10vh) scale(0.9); }
          66% { transform: translate(10vw, -15vh) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes aurora3 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10vw, -20vh) scale(1.15); }
          66% { transform: translate(-15vw, 5vh) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-aurora-1 { animation: aurora1 22s ease-in-out infinite alternate; }
        .animate-aurora-2 { animation: aurora2 25s ease-in-out infinite alternate-reverse; }
        .animate-aurora-3 { animation: aurora3 19s ease-in-out infinite alternate; }
      `}</style>
      
      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-primary/20 mix-blend-screen filter blur-[120px] opacity-70 animate-aurora-1"></div>
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[55vh] rounded-full bg-[#0011ff]/20 mix-blend-screen filter blur-[130px] opacity-60 animate-aurora-2"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[50vh] rounded-full bg-[#00f3ff]/15 mix-blend-screen filter blur-[150px] opacity-70 animate-aurora-3"></div>
      </div>
      
      {/* Hero Header */}
      <div id="technology-header" className="bg-card text-card-foreground pt-32 pb-24 border-b border-border w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
        <div className="w-full max-w-[1920px] mx-auto px-8 md:px-16 text-center relative z-10">
          <span className="font-data-tabular text-primary uppercase tracking-widest block mb-4 font-bold">
            TECHNOLOGY & PORTFOLIO
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-black italic tracking-tight leading-tight mb-8 gradient-shift">
            Bridging Construction Data <br className="hidden md:block" />with AI Intelligence
          </h2>
          <p className="text-xl text-muted-foreground w-full break-keep leading-relaxed mx-auto mixed-font font-medium">
            나인티나인은 건설 현장에 산재한 정형·비정형 데이터를 AI가 즉시 학습하고 이해할 수 있는 최적의 구조로 가공하는 <br className="hidden md:block" />
            국내 유일의 AI 기반 건설 데이터 엔지니어링 기업입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span className="text-sm font-bold tracking-tight">Zero Error</span>
            </div>
            <div className="flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary">speed</span>
              <span className="text-sm font-bold tracking-tight">x1,000 Speed</span>
            </div>
            <div className="flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary">view_in_ar</span>
              <span className="text-sm font-bold tracking-tight">CUBE Ontology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alternating Showcase Section */}
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-16 py-24 flex flex-col gap-32">
        {showcaseItems.map((item, index) => {
          const isImageLeft = index % 2 !== 0;
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${isImageLeft ? 'xl:flex-row-reverse' : 'xl:flex-row'} gap-12 xl:gap-20 items-center`}
            >
              
              {/* Text Side */}
              <div className="xl:flex-[1] w-full order-2 xl:order-1 flex flex-col justify-center relative">
                {/* Flowing Laser Effect behind the text, stretching into the image */}
                <GradientTracing 
                  className={`hidden xl:block ${!isImageLeft ? 'left-0 w-[150%]' : 'right-0 w-[150%]'}`} 
                  direction={!isImageLeft ? 'left-to-right' : 'right-to-left'} 
                  animationDuration={3}
                />
                
                <span className="text-primary font-mono text-sm tracking-widest font-black uppercase mb-3 relative z-10">
                  {item.engTitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight mixed-font tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mixed-font font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Image Side (16:9) */}
              <div className="xl:flex-[2] w-full order-1 xl:order-2">
                <div className="w-full aspect-video rounded-[5px] overflow-hidden border border-border shadow-2xl relative group bg-black flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 transition-colors z-10 pointer-events-none"></div>
                  {/* Scanning Effect */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-primary/80 shadow-[0_0_20px_rgba(0,243,255,0.9)] z-20 pointer-events-none opacity-0 group-hover:opacity-100 scan-line-animate"></div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-700 ease-out" 
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-[5px] border border-white/10 z-20">
                     <span className="text-white/80 font-mono text-[10px] tracking-widest uppercase">System Core {(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Solutions Portfolio Grid (Retained) */}
      <div className="w-full bg-card border-t border-border py-24">
        <div className="w-full max-w-[1920px] mx-auto px-8 md:px-16">
          <div className="mb-16">
             <h2 className="font-headline-md text-4xl text-foreground font-black mb-4">Ninetynine Solution Universe (27+)</h2>
             <p className="text-muted-foreground text-lg mixed-font font-medium">기획부터 시공, 안전, 학술까지 전 생애주기를 커버하는 AI 에이전트 포트폴리오를 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Construction */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 border-primary pb-2">
                 <span className="material-symbols-outlined text-primary">domain</span>
                 <h3 className="font-bold text-lg">Construction (22%)</h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-primary cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">AI-PMIS</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">건설사업 통합 관리 대시보드 및 EVMS 기반 원가·공정·자재 통합 관리</p>
                </li>
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-primary cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">Cost Analysis AI</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">csv 실시간 분석 기반 공종별·동별 대화형 비용 분석 시스템</p>
                </li>
                <li className="bg-background border border-border text-primary/70 rounded-[5px] p-3 text-center text-xs font-medium bg-primary/5">
                  + 4 More Solutions
                </li>
              </ul>
            </div>

            {/* Safety */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 border-chart-2 pb-2">
                 <span className="material-symbols-outlined text-chart-2">health_and_safety</span>
                 <h3 className="font-bold text-lg">Safety (19%)</h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-2 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-2 transition-colors">AI Safety Dashboard</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">2만 건 사고 데이터 기반 WBS-RBS 위험 모니터링</p>
                </li>
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-2 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-2 transition-colors">ConSafe Insight</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">건설현장 사진 실시간 위험요인 분석 및 Vision AI 안전 보고서 자동 생성</p>
                </li>
                <li className="bg-background border border-border text-chart-2/70 rounded-[5px] p-3 text-center text-xs font-medium bg-chart-2/5">
                  + 3 More Solutions
                </li>
              </ul>
            </div>

            {/* Architecture */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 border-chart-3 pb-2">
                 <span className="material-symbols-outlined text-chart-3">architecture</span>
                 <h3 className="font-bold text-lg">Architecture (11%)</h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-3 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-3 transition-colors">Haema Architect</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">AI 건축 법규 검토 및 VWorld GIS 3D 매스 자동 생성</p>
                </li>
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-3 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-3 transition-colors">ARCHI RENDER & RM</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">AI 스케치 렌더링, 시네마틱 영상 생성 및 인테리어 변환 모듈</p>
                </li>
                <li className="bg-background border border-border text-chart-3/70 rounded-[5px] p-3 text-center text-xs font-medium bg-chart-3/5">
                  + 1 More Solution
                </li>
              </ul>
            </div>

            {/* Academic */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 border-chart-4 pb-2">
                 <span className="material-symbols-outlined text-chart-4">school</span>
                 <h3 className="font-bold text-lg">Academic (19%)</h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-4 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-4 transition-colors">Academic Advisor AI</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">건축학 논문 자동 심사 (89편 DB) 및 Peer Reviewer 피드백</p>
                </li>
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-4 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-4 transition-colors">Statistical Studio</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">OLS, Pareto, 이상치 시계열 탐지 등 통계 분석 워크스페이스</p>
                </li>
                <li className="bg-background border border-border text-chart-4/70 rounded-[5px] p-3 text-center text-xs font-medium bg-chart-4/5">
                  + 3 More Solutions
                </li>
              </ul>
            </div>

            {/* General */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 border-chart-5 pb-2">
                 <span className="material-symbols-outlined text-chart-5">widgets</span>
                 <h3 className="font-bold text-lg">General (29%)</h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-5 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-5 transition-colors">Pocket E-Book</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">수백 페이지 분량의 보고서를 인터랙티브 전자책 대시보드로 전환</p>
                </li>
                <li className="bg-background border border-border rounded-[5px] p-4 shadow-sm hover:border-chart-5 cursor-pointer group bento-card relative overflow-hidden">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-chart-5 transition-colors">AI Scanner & HTML</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mixed-font">OCR 기반 네트워킹 스캐너, AI 웹 빌더, HTML 안전성 병합 에이전트 등</p>
                </li>
                <li className="bg-background border border-border text-chart-5/70 rounded-[5px] p-3 text-center text-xs font-medium bg-chart-5/5">
                  + 6 More Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

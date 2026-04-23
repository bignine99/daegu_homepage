import { useEffect, useState } from "react";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("brain-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number; baseAlpha: number }[] = [];
    let circuitPaths: { points: { x: number; y: number }[]; currentPoint: number; progress: number; speed: number; length: number }[] = [];
    let animationId: number;

    function getBrainPointManual(t: number, rFactor: number, centerX: number, centerY: number, scale: number) {
      const x = Math.sin(t);
      const y = -Math.cos(t);
      let r = 1.0;
      if (t < Math.PI * 0.5) r = 1.15;
      else if (t < Math.PI) r = 1.0;
      else if (t < Math.PI * 1.5) r = 0.9;
      else r = 1.1;
      let xMod = x * scale * 1.4 * r * rFactor;
      let yMod = y * scale * 1.1 * r * rFactor;
      if (xMod < 0) xMod *= 1.2;
      if (yMod > 0) yMod *= 0.85;
      return { x: centerX + xMod, y: centerY + yMod };
    }

    function isInsideBrain(px: number, py: number, cx: number, cy: number, sc: number) {
      let dx = (px - cx) / (sc * 1.4);
      let dy = (py - cy) / (sc * 1.1);
      if (dx < 0) dx /= 1.2;
      if (dy > 0) dy /= 0.85;
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 0.95;
    }

    function init() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = canvas.width = parent.clientWidth || 600;
      const h = canvas.height = 350;
      const centerX = w / 2;
      const centerY = h / 2;
      const scale = Math.min(w, h) * 0.42;
      
      circuitPaths = [];
      // Reduce the number of paths/particles slightly if performance is an issue, but we'll stick to original logic
      for (let i = 0; i < 110; i++) {
        const startT = Math.random() * Math.PI * 2;
        const startR = Math.random() * 0.95;
        const s = getBrainPointManual(startT, startR, centerX, centerY, scale);
        const path = [s];
        const curr = { ...s };
        for (let j = 0; j < 14; j++) {
          const dir = Math.random() > 0.5;
          const length = (Math.random() * 25) + 15;
          if (dir) curr.x += Math.random() > 0.5 ? length : -length;
          else curr.y += Math.random() > 0.5 ? length : -length;
          if (isInsideBrain(curr.x, curr.y, centerX, centerY, scale)) {
            path.push({ ...curr });
          } else {
            break;
          }
        }
        if (path.length > 2) circuitPaths.push(path);
      }
      particles = [];
      for (let i = 0; i < 120; i++) {
        particles.push({
          pathIdx: Math.floor(Math.random() * circuitPaths.length),
          progress: Math.random(),
          speed: 0.08 + Math.random() * 0.25,
          size: 1.5 + Math.random() * 3.5,
          color: Math.random() > 0.2 ? "#00d2ff" : "#ffffff",
          trail: Math.random() > 0.7,
        });
      }
    }

    function draw() {
      if (!ctx || circuitPaths.length === 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(0, 210, 255, 0.03)";
      ctx.lineWidth = 1;
      circuitPaths.forEach((path) => {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) ctx.lineTo(path[i].x, path[i].y);
        ctx.stroke();
      });

      particles.forEach((p) => {
        const path = circuitPaths[p.pathIdx];
        if (!path || path.length < 2) return;
        const segs = path.length - 1;
        const total = p.progress * segs;
        const idx = Math.floor(total);
        const part = total - idx;
        if (idx < segs) {
          const s = path[idx];
          const e = path[idx + 1];
          const x = s.x + (e.x - s.x) * part;
          const y = s.y + (e.y - s.y) * part;

          if (p.trail) {
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.3;
            ctx.lineWidth = p.size * 0.5;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }

          ctx.fillStyle = p.color;
          ctx.shadowBlur = 25;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.pathIdx = Math.floor(Math.random() * circuitPaths.length);
        }
      });
      animationId = requestAnimationFrame(draw);
    }

    const resizeHandler = () => init();
    window.addEventListener("resize", resizeHandler);
    // Add a slight delay for init to ensure parent dimensions are final
    setTimeout(() => {
      init();
      draw();
    }, 100);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Handle escape key for modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="w-full flex-1 bg-[#000000] text-slate-100 min-h-screen relative circuit-bg font-sans" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
      <style>{`
        .neon-text {
          text-shadow: 0 0 10px #00d2ff, 0 0 20px #00d2ff;
        }
        .cyan-neon-blink {
          color: #00d2ff;
          text-shadow: 0 0 10px #00d2ff, 0 0 20px #22d3ee;
          animation: cyanBlink 0.8s infinite alternate;
        }
        .cyan-neon-static {
          color: #00d2ff;
          text-shadow: 0 0 10px #00d2ff, 0 0 20px #22d3ee;
        }
        @keyframes cyanBlink {
          0% {
            opacity: 1;
            text-shadow: 0 0 10px #00d2ff, 0 0 20px #22d3ee, 0 0 30px #06b6d4;
          }
          100% {
            opacity: 0.7;
            text-shadow: 0 0 5px #00d2ff, 0 0 10px #22d3ee;
          }
        }
        .glass-card {
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 210, 255, 0.15);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 210, 255, 0.4);
        }
        .circuit-bg {
          background-image: radial-gradient(#1e293b 0.5px, transparent 0.5px);
          background-size: 30px 30px;
        }
        .animate-pulse-fast {
          animation: pulseFast 1s infinite alternate;
        }
        @keyframes pulseFast {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .progress-bar-animate {
          animation: slide-right 1s ease-in-out infinite;
        }
        @keyframes bar-surge {
          0% { height: 0%; opacity: 0.3; transform: translateY(0); }
          40% { height: 130%; opacity: 1; transform: translateY(-5%); }
          70% { height: 105%; opacity: 1; transform: translateY(0); }
          100% { height: 100%; opacity: 1; transform: translateY(0); }
        }
        .bar-surge {
          animation: bar-surge 2.5s ease-out infinite;
        }
        .workspace-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: pointer;
          animation: fadeIn 0.3s ease-out;
        }
        .workspace-modal img {
          max-width: 90vw;
          max-height: 85vh;
          border-radius: 5px;
          border: 2px solid rgba(0, 210, 255, 0.3);
          box-shadow: 0 0 60px rgba(0, 210, 255, 0.2);
          cursor: default;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <div className="flex flex-col md:flex-row w-full max-w-[1920px] mx-auto min-h-screen">
        <aside className="w-full md:w-[400px] bg-[#000000] border-r border-slate-800 p-5 md:p-6 flex flex-col md:sticky md:top-0 h-screen overflow-y-auto shrink-0 scrollbar-hide">
          <div className="mb-6 lg:mt-2">
            <h1 className="text-[26px] font-black neon-text tracking-tighter mb-1 mt-2">조대구, CEO, Ph.D.</h1>
            <p className="text-[12px] text-cyan-500 font-bold uppercase tracking-[0.2em]">Engineering & AI Expert</p>
          </div>
          <div className="space-y-5">
            <section>
              <h2 className="text-[14px] font-black text-slate-500 uppercase mb-3 border-b border-slate-800 pb-1">Education</h2>
              <div className="text-[13px] space-y-3 text-slate-300">
                <p><strong>Wisconsin-Madison, Ph.D.</strong> (2009.09)<br /><span className="text-slate-500 text-[12px]">CM & Building Information Modeling</span></p>
                <p><strong>인하대학교 공과대학 M.S.</strong> (2000.02)<br /><span className="text-slate-500 text-[12px]">건축공학과 건설관리 전공</span></p>
              </div>
            </section>
            <section>
              <h2 className="text-[14px] font-black text-slate-500 uppercase mb-3 border-b border-slate-800 pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2 max-w-[350px]">
                <span className="px-3 py-1 bg-cyan-900/20 border border-cyan-800/50 rounded-[5px] text-[12px] text-cyan-400 font-bold tracking-tight uppercase">BIM</span>
                <span className="px-3 py-1 bg-cyan-900/20 border border-cyan-800/50 rounded-[5px] text-[12px] text-cyan-400 font-bold tracking-tight uppercase">CM</span>
                <span className="px-3 py-1 bg-cyan-900/20 border border-cyan-800/50 rounded-[5px] text-[12px] text-cyan-400 font-bold tracking-tight uppercase">Big Data Analysis</span>
                <span className="px-3 py-1 bg-cyan-900/20 border border-cyan-800/50 rounded-[5px] text-[12px] text-cyan-400 font-bold tracking-tight uppercase">Research & Dev</span>
                <span className="px-3 py-1 bg-cyan-900/20 border border-cyan-800/50 rounded-[5px] text-[12px] text-cyan-400 font-bold tracking-tight uppercase">AI Consultant</span>
              </div>
            </section>
            <section>
              <h2 className="text-[14px] font-black text-slate-500 uppercase mb-3 border-b border-slate-800 pb-1">Current</h2>
              <div className="text-[13px] space-y-2 text-slate-300">
                <p className="flex justify-between font-bold"><span>(주)나인티나인</span><span className="text-cyan-500">대표</span></p>
                <p className="flex justify-between font-bold"><span>이화여대, 동국대</span><span className="text-cyan-500">겸임교수</span></p>
              </div>
            </section>
            <section>
               <h2 className="text-[14px] font-black text-slate-500 uppercase mb-3 border-b border-slate-800 pb-1">Contact</h2>
               <div className="text-[12px] space-y-3 text-slate-400">
                   <p><strong className="text-slate-200">Email:</strong> bignine99@naver.com</p>
               </div>
            </section>
          </div>
          <div className="mt-5 mb-3">
             <button onClick={() => setIsModalOpen(true)} className="w-full px-4 py-2.5 rounded-[5px] bg-gradient-to-r from-cyan-900/40 to-cyan-800/30 border border-cyan-500/30 text-cyan-400 text-[13px] font-black uppercase tracking-wider hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                 📸 작업 사진
             </button>
          </div>
          <div className="mt-auto pt-4 pb-3 border-t border-slate-800">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-black mb-1">Processing Status</p>
            <p className="text-[12px] font-bold text-cyan-400 animate-pulse-fast tracking-tighter">3,000,000,000 TOKENS / MONTH ACTIVE</p>
          </div>
        </aside>

        <main className="flex-1 p-5 md:p-10 min-h-screen">
          <section id="hero" className="mb-6 md:mt-4">
            <div className="relative overflow-hidden rounded-[5px] p-5 md:p-6 glass-card flex flex-col xl:flex-row items-center justify-between min-h-0">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-[5px]"></div>
              <div className="relative z-10 xl:w-[40%] text-center xl:text-left mb-8 xl:mb-0">
                <span className="inline-block px-3 py-1 rounded-[5px] bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black mb-3 tracking-widest uppercase">#Neuro_Circuitry_Sync</span>
                <h2 className="text-4xl md:text-5xl font-black mb-3 leading-[1.1] tracking-tight">
                  AI <span className="cyan-neon-blink">뇌</span>를<br />
                  <span className="cyan-neon-blink">녹</span>이는 <span className="cyan-neon-blink">남</span>자
                </h2>
                <p className="text-[14px] text-slate-400 max-w-xl leading-relaxed mx-auto xl:mx-0 font-medium italic mt-4">
                  "뇌는 생물학적 컴퓨터가 아니라, 초월적 회로다."
                </p>
                <p className="text-[13px] text-slate-500 mt-2 leading-relaxed font-bold">
                  비전공자에서 8개월 만에 400건의 AI 에이전트를 설계한 조대구 박사의 실시간 신경망 동기화 상태입니다.
                </p>
              </div>
              <div className="relative w-full xl:w-[60%] h-[350px]">
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.75)] rounded-[5px]">
                  <img src="/images/brain-circuit.png" alt="AI Brain" className="max-w-full max-h-full object-contain opacity-80" style={{ filter: "drop-shadow(0 0 30px rgba(0, 210, 255, 0.3))" }} />
                </div>
                <canvas id="brain-canvas" className="absolute inset-0 w-full h-full cursor-crosshair pointer-events-none rounded-[5px]"></canvas>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-[5px] bg-slate-900/90 border border-cyan-500/20 text-[9px] font-black text-cyan-400 uppercase tracking-[0.4em] backdrop-blur-md whitespace-nowrap">
                  Cybernetic Brain Online
                </div>
              </div>
            </div>
          </section>

          <section id="stats" className="mb-6">
            <h3 className="text-[17px] font-black mb-4 border-l-[5px] border-cyan-500 pl-3 uppercase tracking-tighter">뇌 용량 과부하 지표 (Performance)</h3>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-[5px] flex flex-col justify-between h-[340px]">
                <div>
                  <p className="text-slate-500 text-[10px] mb-1 font-black uppercase tracking-widest">Work Time / Day</p>
                  <p className="text-5xl font-black text-cyan-400 tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    40<span className="text-xl ml-2 font-bold text-slate-500">hr/day</span>
                  </p>
                  <p className="text-[10px] text-slate-400 mb-4 font-medium italic">※ AI 병렬 처리를 통해 물리적 시간을 왜곡 중</p>
                  <div className="border-t border-slate-800/50 pt-4 space-y-3">
                    <p className="text-[11px] text-slate-400 flex justify-between"><span>Energy Consumption:</span><span className="text-cyan-400 font-black">약 2100kWh</span></p>
                    <p className="text-[11px] text-slate-400 flex justify-between"><span>Water Usage:</span><span className="text-cyan-400 font-black">2000ml × 1000병</span></p>
                    <p className="text-[11px] text-slate-400 flex justify-between"><span>Carbon Footprint:</span><span className="text-red-500 font-black tracking-tight">CO₂ 1000kg (6000km)</span></p>
                  </div>
                </div>
                <div className="mt-6 w-full bg-slate-800/50 h-2 rounded-full overflow-hidden shadow-inner relative">
                  <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 h-full w-[40%] progress-bar-animate"></div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-[5px] flex flex-col relative group/card h-[340px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-[5px] pointer-events-none group-hover/card:bg-purple-500/20 transition-all duration-700"></div>
                <div className="relative z-10 flex justify-between items-start mb-2">
                  <div>
                    <p className="text-slate-500 text-[10px] mb-1 font-black uppercase tracking-widest">Token Consumption / Mo</p>
                    <p className="text-5xl font-black text-purple-400 tracking-tighter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      30<span className="text-2xl ml-1 text-slate-400">억+</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-[5px] bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse mr-2 shadow-[0_0_10px_#ef4444]"></span>
                      <span className="text-[10px] font-black text-red-400 tracking-wide">x600 OVERLOAD</span>
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex items-end justify-center gap-16 pb-2 mt-2 relative z-10">
                  <div className="flex flex-col items-center group/bar relative">
                    <div className="relative w-16 h-[140px] flex items-end justify-center">
                      <div className="absolute inset-x-0 bottom-0 h-full w-[2px] bg-slate-800/50 mx-auto rounded-full"></div>
                      <div className="w-full h-[2px] bg-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.5)] relative z-10 group-hover/bar:bg-slate-200 transition-colors"></div>
                      <div className="absolute -top-10 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300 text-[10px] bg-slate-900/90 text-slate-300 px-2 py-1 rounded-[5px] border border-slate-700 whitespace-nowrap backdrop-blur-md">
                        Standard Workload
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-[11px] font-black text-slate-300 block mb-0.5 drop-shadow-md">500만</span>
                      <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-widest">Office Worker</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center group/bar">
                    <div className="relative w-16 h-[140px] flex items-end justify-center">
                      <div className="absolute inset-x-0 bottom-0 h-full w-[40px] bg-purple-900/10 mx-auto rounded-t-[5px] border-x border-purple-500/10"></div>
                      <div className="w-[40px] h-full bg-gradient-to-t from-purple-900 via-purple-600 to-purple-400 rounded-t-[5px] shadow-[0_0_40px_rgba(168,85,247,0.5)] relative overflow-hidden bar-surge group-hover/bar:shadow-[0_0_60px_rgba(168,85,247,0.7)] transition-shadow duration-500">
                        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "4px 4px" }}></div>
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-white shadow-[0_0_15px_white] animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-center mt-2 relative">
                      <div className="absolute -inset-2 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                      <span className="relative text-[12px] font-black text-purple-400 block uppercase tracking-widest mb-0.5 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">Ninetynine</span>
                      <span className="relative text-[10px] font-bold text-white bg-purple-600/80 px-2 py-0.5 rounded-[5px] border border-purple-400/30">30억+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="glass-card rounded-[5px] p-8">
              <h3 className="text-2xl font-black mb-8 italic tracking-tighter">"1인 기업 박사급 20명과 함께 일하는 회사"</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
                <div className="p-5 rounded-[5px] bg-[#000000] border border-slate-800/50">
                  <span className="text-[9px] font-black text-red-500 block mb-1">BEFORE 8 MO</span>
                  <h4 className="text-md font-black mb-2 uppercase">Coding Level 0</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-medium">파이썬을 뱀 이름으로 알던 건축 전공자, 모든 것이 멈춘 시점에 시작된 집착적 학습.</p>
                </div>
                <div className="p-5 rounded-[5px] bg-[#000000] border border-slate-800/50">
                  <span className="text-[9px] font-black text-cyan-500 block mb-1">DURING 4 YR</span>
                  <h4 className="text-md font-black mb-2 uppercase">AI Total Immersion</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-medium">RAG, LangChain, MCP를 넘어 Vibe Coding까지, AI와 대화하며 깨달은 지식의 재구성.</p>
                </div>
                <div className="p-5 rounded-[5px] bg-[#000000] border border-slate-800/50">
                  <span className="text-[9px] font-black text-green-500 block mb-1">NOW</span>
                  <h4 className="text-md font-black mb-2 uppercase">400+ Solutions</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-medium">학위보다 중요한 것은 실행력. 1인 기업의 한계를 부수는 무한 확장 모델의 완성.</p>
                </div>
                <div className="p-5 rounded-[5px] bg-[#000000] border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <span className="text-[9px] font-black text-cyan-400 block mb-1 uppercase tracking-widest">Efficiency Core</span>
                  <h4 className="text-md font-black mb-2 uppercase">20 AI Agents</h4>
                  <p className="text-slate-200 text-[11px] leading-relaxed font-bold">기획, 디자인, 프로그래밍, 마케팅, 문서작업을 기존 방식보다 100배 빠른 속도로 상시 가동.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Idea 3: Core Philosophy & Vision */}
          <section className="mb-16 border-t border-slate-800/50 pt-16 pb-8 text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <span className="material-symbols-outlined text-4xl text-cyan-500/30 mb-6">format_quote</span>
            <h3 className="text-2xl md:text-4xl font-black mb-8 leading-[1.5] tracking-tight mix-blend-plus-lighter text-slate-100">
              "건설업은 땀과 먼지의 산업이 아니라,<br />
              <span className="text-cyan-400">가장 정밀한 데이터의 집합체</span>여야 합니다."
            </h3>
            <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium break-keep">
              수십 년간 파편화된 현장의 지식과 경험을 AI가 즉시 이해하고 응용할 수 있는 지능형 자산으로 변환하는 것. <br className="hidden md:block" />
              그것이 나인티나인이 추구하는 <strong className="text-slate-200">건설 산업의 완전한 지능화</strong>입니다.
            </p>
          </section>

          {/* Idea 1: AI Technology Stack */}
          <section className="mb-12">
            <h3 className="text-[17px] font-black mb-4 border-l-[5px] border-cyan-500 pl-3 uppercase tracking-tighter">Ninetynine Core AI Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="glass-card p-6 rounded-[5px] group hover:border-cyan-500/50 transition-all cursor-default">
                <span className="text-[10px] text-cyan-500 font-black tracking-widest uppercase mb-1 block">Logic & Reasoning</span>
                <h4 className="text-lg font-bold text-slate-200 mb-2">Claude Opus 4.7</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium break-keep">복잡한 건설 법규 검토 및 온톨로지 구조 설계 등 고도의 추론이 필요한 에이전트의 핵심 두뇌 역할</p>
              </div>
              <div className="glass-card p-6 rounded-[5px] group hover:border-purple-500/50 transition-all cursor-default">
                <span className="text-[10px] text-purple-500 font-black tracking-widest uppercase mb-1 block">Data Mining & Code</span>
                <h4 className="text-lg font-bold text-slate-200 mb-2">Gemini 3.1 Pro</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium break-keep">대용량 CSV, JSONL 데이터 고속 파싱, 시계열 분석 및 다차원 데이터 파이프라인 자동화 봇 구축</p>
              </div>
              <div className="glass-card p-6 rounded-[5px] group hover:border-green-500/50 transition-all cursor-default">
                <span className="text-[10px] text-green-500 font-black tracking-widest uppercase mb-1 block">Framework & Tools</span>
                <h4 className="text-lg font-bold text-slate-200 mb-2">MCP & LangChain</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium break-keep">Model Context Protocol을 이용한 로컬 환경 및 RAG 기반 고차원 벡터 DB와의 완벽한 생태계 연동</p>
              </div>
              <div className="glass-card p-6 rounded-[5px] group hover:border-blue-500/50 transition-all cursor-default">
                <span className="text-[10px] text-blue-500 font-black tracking-widest uppercase mb-1 block">Vibe Coding</span>
                <h4 className="text-lg font-bold text-slate-200 mb-2">Antigravity</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium break-keep">자연어 지시만으로 React/TypeScript 기반의 프리미엄 프론트엔드를 찍어내는 무한대의 개발 생산성</p>
              </div>
            </div>
          </section>

          {/* Idea 2: Real-time 'Vibe Coding' Terminal */}
          <section className="mb-12">
            <h3 className="text-[17px] font-black mb-4 border-l-[5px] border-cyan-500 pl-3 uppercase tracking-tighter">Real-time Agent Synchronization</h3>
            <div className="w-full h-[320px] bg-[#050505] border border-slate-800 rounded-[5px] shadow-[inset_0_0_40px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col font-mono group">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a0a0c] border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-3 text-[11px] text-slate-500 font-bold">bash - vibe-coding-agent - 192.168.0.1</span>
              </div>
              <div className="p-6 overflow-hidden flex-1 text-[13px] leading-[1.8] relative scrollbar-hide">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none group-hover:bg-[linear-gradient(rgba(0,210,255,0.06)_1px,transparent_1px)] transition-all duration-700 z-20"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
                
                <div className="terminal-scroll-container w-full pt-2">
                  {[1, 2].map((key) => (
                    <div key={key} className="terminal-scroll-content mb-6 flex flex-col gap-1 w-full">
                      <p className="text-slate-400 mb-2">System <span className="text-cyan-400 font-black drop-shadow-[0_0_5px_rgba(0,210,255,0.8)]">ONLINE</span>. Connected to 20 local AI nodes.</p>
                      
                      <p className="text-green-400 mt-2 w-full"><span className="text-slate-500">ceo@ninetynine:~$</span> /execute CM_Data_Analysis</p>
                      <p className="text-slate-300 w-full">Agent[Claude-Opus]: Extracting 5W1H ontology from 300 pages...</p>
                      <p className="text-yellow-400 pl-4 w-full">▸ Found 450 risk factors. Mapping to WBS-RBS database...</p>
                      <p className="text-slate-300 w-full">Agent[Gemini-3.1]: Vectors aligned. Generating React Component...</p>
                      <p className="text-cyan-400 font-bold mb-2 w-full drop-shadow-[0_0_5px_rgba(0,210,255,0.5)]">Running build... 100% 무결점 통과. Deployed in 1.4s.</p>

                      <p className="text-green-400 mt-3 w-full"><span className="text-slate-500">ceo@ninetynine:~$</span> /run safety_pipeline_v2</p>
                      <p className="text-slate-300 w-full">Agent[Claude-Opus]: Ingesting 20,000 incident reports...</p>
                      <p className="text-yellow-400 pl-4 w-full">▸ Training anomaly detection model (Epoch 12/50)...</p>
                      <p className="text-slate-300 w-full">Agent[Gemini-3.1]: Logic optimized. Code refactored with 0 lint errors.</p>
                      <p className="text-purple-400 pl-4 mb-2 w-full">▸ Antigravity IDE: Committing changes to git repository.</p>

                      <p className="text-green-400 mt-3 w-full"><span className="text-slate-500">ceo@ninetynine:~$</span> /generate 3d_arch_envelope</p>
                      <p className="text-slate-300 w-full">Agent[Gemini-3.1]: Analyzing building laws (정북일조, 사선제한)...</p>
                      <p className="text-yellow-400 pl-4 w-full">▸ Creating 3D Three.js mesh with setback offsets...</p>
                      <p className="text-cyan-400 font-bold mb-2 w-full drop-shadow-[0_0_5px_rgba(0,210,255,0.5)]">WebGL Scene rendered. Canvas update complete.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <style>{`
              .terminal-scroll-container {
                display: flex;
                flex-direction: column;
                animation: scrollTerminal 1.5s linear infinite;
              }
              @keyframes scrollTerminal {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
            `}</style>
          </section>

        </main>
      </div>

      {isModalOpen && (
        <div className="workspace-modal" onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false) }}>
          <button className="absolute top-6 right-6 w-10 h-10 rounded-[5px] bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all z-50" onClick={() => setIsModalOpen(false)}>&times;</button>
          <img src="/images/KakaoTalk_20260226_215206519.jpg" alt="작업 환경 - 멀티 모니터 셋업" className="max-w-[90vw] max-h-[85vh] rounded-[5px] border-2 border-cyan-500/30 shadow-[0_0_60px_rgba(0,210,255,0.2)] pointer-events-none" />
        </div>
      )}
    </div>
  );
}

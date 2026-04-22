import React, { useEffect, useRef } from 'react';

const InteractiveNeuralVortex = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 }); // Real-time pointer updates
  const animationRef = useRef<number | null>(null);

  // WebGL setup
  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    // Initialize WebGL context
    const gl = canvasEl.getContext('webgl') || canvasEl.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Shader sources
    const vsSource = `
      precision mediump float;
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;
      
      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }
      
      float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;
        for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 1.);
          sine_acc = rotate(sine_acc, 1.);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.4 * p;
          res += (.5 + .5 * cos(layer)) / scale;
          scale *= (1.2);
        }
        return res.x + res.y;
      }
      
      void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .5 * pow(1. - p, 2.);
        float t = .001 * u_time;
        vec3 color = vec3(0.);
        float noise = neuro_shape(uv, t, p);
        noise = 1.2 * pow(noise, 3.);
        noise += pow(noise, 10.);
        noise = max(.0, noise - .5);
        noise *= (1. - length(vUv - .5));
        
        // Cyberpunk/Construction AI color palette (Cyan/Electric Blue)
        color = vec3(0.0, 0.5, 1.0);
        color = mix(color, vec3(0.0, 0.8, 1.0), 0.32 + 0.16 * sin(2.0 * u_scroll_progress + 1.2));
        color += vec3(0.1, 0.2, 0.9) * sin(2.0 * u_scroll_progress + 1.5);
        color = color * noise;
        gl_FragColor = vec4(color, noise);
      }
    `;

    // Shader compilation
    const compileShader = (gl: WebGLRenderingContext | WebGLRenderingContext, source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl as WebGLRenderingContext, vsSource, (gl as WebGLRenderingContext).VERTEX_SHADER);
    const fragmentShader = compileShader(gl as WebGLRenderingContext, fsSource, (gl as WebGLRenderingContext).FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    // Program setup
    const program = (gl as WebGLRenderingContext).createProgram();
    if (!program) return;
    (gl as WebGLRenderingContext).attachShader(program, vertexShader);
    (gl as WebGLRenderingContext).attachShader(program, fragmentShader);
    (gl as WebGLRenderingContext).linkProgram(program);
    if (!(gl as WebGLRenderingContext).getProgramParameter(program, (gl as WebGLRenderingContext).LINK_STATUS)) {
      console.error('Program link error:', (gl as WebGLRenderingContext).getProgramInfoLog(program));
      return;
    }
    (gl as WebGLRenderingContext).useProgram(program);

    // Geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = (gl as WebGLRenderingContext).createBuffer();
    (gl as WebGLRenderingContext).bindBuffer((gl as WebGLRenderingContext).ARRAY_BUFFER, vertexBuffer);
    (gl as WebGLRenderingContext).bufferData((gl as WebGLRenderingContext).ARRAY_BUFFER, vertices, (gl as WebGLRenderingContext).STATIC_DRAW);

    const positionLocation = (gl as WebGLRenderingContext).getAttribLocation(program, 'a_position');
    (gl as WebGLRenderingContext).enableVertexAttribArray(positionLocation);
    (gl as WebGLRenderingContext).bindBuffer((gl as WebGLRenderingContext).ARRAY_BUFFER, vertexBuffer);
    (gl as WebGLRenderingContext).vertexAttribPointer(positionLocation, 2, (gl as WebGLRenderingContext).FLOAT, false, 0, 0);

    // Uniforms
    const uTime = (gl as WebGLRenderingContext).getUniformLocation(program, 'u_time');
    const uRatio = (gl as WebGLRenderingContext).getUniformLocation(program, 'u_ratio');
    const uPointerPosition = (gl as WebGLRenderingContext).getUniformLocation(program, 'u_pointer_position');
    const uScrollProgress = (gl as WebGLRenderingContext).getUniformLocation(program, 'u_scroll_progress');

    // Resize handler
    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = window.innerWidth * devicePixelRatio;
      canvasEl.height = window.innerHeight * devicePixelRatio;
      (gl as WebGLRenderingContext).viewport(0, 0, canvasEl.width, canvasEl.height);
      (gl as WebGLRenderingContext).uniform1f(uRatio, canvasEl.width / canvasEl.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const render = () => {
      const currentTime = performance.now();
      
      // Smooth pointer movement
      pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.2;
      pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.2;
      
      (gl as WebGLRenderingContext).uniform1f(uTime, currentTime);
      (gl as WebGLRenderingContext).uniform2f(uPointerPosition, 
        pointer.current.x / window.innerWidth, 
        1 - pointer.current.y / window.innerHeight
      );
      (gl as WebGLRenderingContext).uniform1f(uScrollProgress, window.pageYOffset / (2 * window.innerHeight));
      
      (gl as WebGLRenderingContext).drawArrays((gl as WebGLRenderingContext).TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      pointer.current.tX = e.clientX;
      pointer.current.tY = e.clientY;
    };

    window.addEventListener('pointermove', handleMouseMove);
    window.addEventListener('touchmove', (e) => {
      if (e.touches[0]) {
        pointer.current.tX = e.touches[0].clientX;
        pointer.current.tY = e.touches[0].clientY;
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (gl) {
        (gl as WebGLRenderingContext).deleteProgram(program);
        (gl as WebGLRenderingContext).deleteShader(vertexShader);
        (gl as WebGLRenderingContext).deleteShader(fragmentShader);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden font-sans bg-black">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        id="neuro" 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-100 z-0"
      ></canvas>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 w-full px-6 z-10 relative">
        {/* Floating Words */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-20 overflow-hidden">
          <span className="float-word float-1 absolute top-[12%] left-[8%] text-primary/40 font-mono font-bold text-3xl tracking-widest uppercase blur-[1px]">Bigdata</span>
          <span className="float-word float-2 absolute top-[45%] left-[4%] text-[#00d2ff]/40 font-mono font-bold text-5xl tracking-widest uppercase blur-[2px]">AI</span>
          <span className="float-word float-3 absolute top-[15%] right-[6%] text-[#00d2ff]/30 font-mono font-bold text-4xl tracking-widest uppercase blur-[1px]">Construction</span>
          <span className="float-word float-4 absolute bottom-[15%] right-[8%] text-primary/40 font-mono font-bold text-2xl tracking-widest uppercase blur-[1px]">Solutions</span>
          <span className="float-word float-5 absolute bottom-[18%] left-[10%] text-[#00d2ff]/20 font-mono font-bold text-6xl tracking-widest uppercase blur-[3px] -rotate-12">Innovation</span>
          
          <span className="float-word float-6 absolute bottom-[40%] right-[4%] text-[#00d2ff]/50 font-mono font-bold text-4xl tracking-widest uppercase blur-[1px] rotate-6">LLM</span>
          <span className="float-word float-7 absolute top-[8%] left-[40%] text-primary/50 font-mono font-bold text-3xl tracking-widest uppercase blur-[2px] -rotate-6">Knowledge</span>
          <span className="float-word float-8 absolute bottom-[8%] left-[45%] text-[#00d2ff]/40 font-mono font-bold text-4xl tracking-widest uppercase blur-[1px] rotate-12">RAG</span>
        </div>
        <div className="max-w-4xl w-full outline-style rounded-3xl px-8 py-14 text-center backdrop-blur-md animate-seq bg-black/40 border border-white/10 shadow-2xl">
          <h1 className="geist-heading geist-h1 drop-shadow-lg font-serif gradient-shift">
            The Future of Construction AI
          </h1>
          <p className="geist-heading geist-h2 mb-16 text-white/80 max-w-2xl mx-auto leading-relaxed mt-4">
            데이터와 지능이 만날 때 자산이 됩니다.<br className="hidden md:block" />
            단순한 시스템 구축을 넘어, 건설 데이터의 본질을 이해하고 지능형 자산으로 변환하는 아키텍처를 설계합니다.
          </p>
          <a href="/technology"
            className="inline-block mt-4 px-10 py-4 rounded-xl border border-white/30 bg-transparent font-semibold text-white hover:border-[#00d2ff] hover:bg-[#00d2ff]/10 hover:text-[#00d2ff] focus:ring-2 focus:ring-[#00d2ff]/50 transition-all duration-300 shadow-none hover:shadow-[0_0_25px_rgba(0,210,255,0.4)]">
            솔루션 알아보기
          </a>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes floatAnim {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.3; text-shadow: 0 0 10px currentColor; }
          33% { transform: translateY(-40px) translateX(20px) rotate(8deg) scale(1.1); opacity: 0.9; text-shadow: 0 0 30px currentColor; }
          66% { transform: translateY(-15px) translateX(-20px) rotate(-6deg) scale(0.95); opacity: 0.5; text-shadow: 0 0 15px currentColor; }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.3; text-shadow: 0 0 10px currentColor; }
        }
        .float-word {
          animation: floatAnim 6s ease-in-out infinite;
        }
        .float-1 { animation-delay: 0s; animation-duration: 7s; }
        .float-2 { animation-delay: 1.5s; animation-duration: 5s; }
        .float-3 { animation-delay: 3s; animation-duration: 8s; }
        .float-4 { animation-delay: 4.5s; animation-duration: 6s; }
        .float-5 { animation-delay: 2s; animation-duration: 9s; transform-origin: center; }
        .float-6 { animation-delay: 1s; animation-duration: 11s; }
        .float-7 { animation-delay: 3.5s; animation-duration: 10s; }
        .float-8 { animation-delay: 0.5s; animation-duration: 12s; }

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

        @keyframes slideInUp { 
          from { opacity: 0; transform: translateY(40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-seq {
          animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .geist-heading {
          font-family: var(--font-sans), 'Pretendard', sans-serif;
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 0.5em;
        }
        .geist-h1 {
          font-size: 3rem;
          line-height: 1.1;
          font-weight: 900;
        }
        @media (min-width: 768px) {
          .geist-h1 { font-size: 4.5rem; }
        }
        .geist-h2 {
          font-size: 1.125rem;
          line-height: 1.6;
        }
        @media (min-width: 768px) {
          .geist-h2 { font-size: 1.25rem; }
        }
        .outline-style,
        .outline-btn {
          border: 1px solid rgba(255,255,255,0.15) !important;
        }
        a { text-decoration: none; }
      `}</style>
    </div>
  );
};

export default InteractiveNeuralVortex;

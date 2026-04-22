"use client"

import { useState, useEffect } from "react"
import { X, Check, ArrowRight, BarChart3, Globe2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [formStep, setFormStep] = useState<"idle" | "submitting" | "success">("idle")

  const handleExpand = () => setIsExpanded(true)
  
  const handleClose = () => {
    setIsExpanded(false)
    // Reset form after a brief delay so the user doesn't see it reset while closing
    setTimeout(() => setFormStep("idle"), 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep("submitting")
    // Simulate API call
    setTimeout(() => {
      setFormStep("success")
    }, 1500)
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isExpanded])

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 px-4 sm:px-6 py-12 sm:py-20 transition-colors duration-300 w-full">
        
        {/* GodRays Background - Adjusted to be subtle in both modes */}
        <div className="absolute inset-0 pointer-events-none">
          <GodRays
            colorBack="#00000000"
            // Using slightly transparent grays/whites to work on both dark/light backgrounds
            colors={["#a1a1aa40", "#e4e4e740", "#71717a40", "#52525b40"]}
            colorBloom="#a1a1aa"
            offsetX={0.85}
            offsetY={-1}
            intensity={0.5}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.38}
            bloom={0.3}
            speed={0.5}
            scale={1.6}
            frame={3332042.8159981333}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 backdrop-blur-sm shadow-sm"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2.5"></span>
            Construction Intelligence Architect
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl"
            style={{ wordKeep: "keep-all" }}
          >
            데이터와 지능이 만날 때 <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-400 dark:from-primary dark:to-orange-400 leading-tight block mt-2">
              자산이 됩니다
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl px-4 leading-relaxed"
          >
            단순한 시스템 구축을 넘어, 건설 데이터의 본질을 이해하고 지능형 자산으로 변환하는 아키텍처를 설계합니다.
          </motion.p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative mt-4">
                {/* The expanding background element */}
                <motion.div
                  style={{ borderRadius: "100px" }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 bg-primary dark:bg-primary"
                />
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="relative flex items-center gap-2 h-14 px-8 py-3 text-lg font-bold text-primary-foreground tracking-wide hover:opacity-90 transition-opacity"
                >
                  솔루션 알아보기
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 
        Expanded Modal Overlay 
      */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
            <motion.div
              layoutId="cta-card"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              style={{ borderRadius: "24px" }}
              layout
              className="relative flex h-full w-full overflow-hidden bg-primary sm:rounded-[5px] shadow-2xl"
            >
              {/* Mesh Gradient Background inside Modal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
              >
                <MeshGradient
                  speed={0.6}
                  colors={["#ea580c", "#c2410c", "#9a3412", "#7c2d12"]} // Custom palette
                  distortion={0.8}
                  swirl={0.1}
                  grainMixer={0.15}
                  grainOverlay={0}
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleClose}
                className="absolute right-4 top-4 sm:right-8 sm:top-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto overflow-y-auto lg:overflow-hidden"
              >
                {/* Left Side: Testimonials & Info */}
                <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 gap-8 text-white">
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                      함께 혁신할 준비가<br/>되셨나요?
                    </h2>
                    <p className="text-orange-100 text-lg max-w-md">
                      나인티나인과 함께 데이터를 자산으로 변환하는 수많은 혁신 기업의 대열에 합류하세요.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-[5px] bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        <BarChart3 className="w-6 h-6 text-orange-200" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">데이터 분석 기반</h3>
                        <p className="text-orange-100/80 text-sm leading-relaxed mt-1">
                          수작업 없이 운영 워크플로우에 내제화 된 실시간 통찰력을 제공합니다.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-[5px] bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        <Globe2 className="w-6 h-6 text-orange-200" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">차세대 관리 인프라</h3>
                        <p className="text-orange-100/80 text-sm leading-relaxed mt-1">
                          가장 빠르고 강력한 엔터프라이즈급 AI 파이프라인.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/20">
                    <figure>
                      <blockquote className="text-xl font-medium leading-relaxed mb-6">
                        "나인티나인의 시스템 아키텍처는 우리의 업무 혁신 속도를 완전히 바꿔 놓았습니다. 정말 놀라운 발전입니다."
                      </blockquote>
                      <figcaption className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-slate-800 to-black flex items-center justify-center text-lg font-bold text-white shadow-xl">
                          JH
                        </div>
                        <div>
                          <div className="font-semibold text-white">김지훈</div>
                          <div className="text-sm text-orange-200">건설기획팀 이사, 현대산업</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-12 lg:p-16 bg-black/10 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none" style={{ minHeight: "500px" }}>
                  <div className="w-full max-w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[5px] p-6 sm:p-8 shadow-2xl relative mx-auto my-auto h-auto">
                    
                    {formStep === "success" ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                      >
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                          <Check className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">요청이 접수되었습니다!</h3>
                          <p className="text-orange-100">조만간 데모 시연을 위해 연락 드리겠습니다.</p>
                        </div>
                        <button 
                          onClick={handleClose}
                          className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-[5px] transition-colors text-sm font-medium"
                        >
                          홈페이지로 돌아가기
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1 mb-2">
                          <h3 className="text-xl font-semibold text-white">데모 신청하기</h3>
                          <p className="text-sm text-orange-200">아래 폼을 작성해주시면 연락드리겠습니다.</p>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label htmlFor="name" className="block text-xs font-medium text-orange-100 mb-1 tracking-widest">
                              성함
                            </label>
                            <input
                              required
                              type="text"
                              id="name"
                              placeholder="홍길동"
                              className="w-full px-4 py-2.5 rounded-[5px] bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-xs font-medium text-orange-100 mb-1 tracking-widest">
                              회사 이메일
                            </label>
                            <input
                              required
                              type="email"
                              id="email"
                              placeholder="hong@company.com"
                              className="w-full px-4 py-2.5 rounded-[5px] bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all text-sm"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="company" className="block text-xs font-medium text-orange-100 mb-1 tracking-widest">
                                회사명
                              </label>
                              <input
                                type="text"
                                id="company"
                                placeholder="(주) 나인티나인"
                                className="w-full px-4 py-2.5 rounded-[5px] bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all text-sm"
                              />
                            </div>
                            <div>
                              <label htmlFor="size" className="block text-xs font-medium text-orange-100 mb-1 tracking-widest">
                                규모
                              </label>
                              <select
                                id="size"
                                className="w-full px-4 py-2.5 rounded-[5px] bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                              >
                                <option className="bg-orange-950">1-50명</option>
                                <option className="bg-orange-950">51-200명</option>
                                <option className="bg-orange-950">201-1000명</option>
                                <option className="bg-orange-950">1000명 이상</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-xs font-medium text-orange-100 mb-1 tracking-widest">
                              도입 목적
                            </label>
                            <textarea
                              id="message"
                              rows={2}
                              placeholder="간단한 도입 목적을 적어주세요."
                              className="w-full px-4 py-2.5 rounded-[5px] bg-black/20 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none text-sm"
                            />
                          </div>
                        </div>

                        <button
                          disabled={formStep === "submitting"}
                          type="submit"
                          className="w-full flex items-center justify-center px-8 py-3 rounded-[5px] bg-white text-orange-900 font-bold hover:bg-orange-50 focus:ring-4 focus:ring-orange-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                        >
                          {formStep === "submitting" ? (
                             <span className="flex items-center gap-2">
                               <span className="h-4 w-4 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></span>
                               처리중...
                             </span>
                          ) : "요청 보내기"}
                        </button>
                        
                        <p className="text-[10px] text-center text-orange-200/60 mt-3 border-t border-white/10 pt-3">
                          본 양식 제출 시 나인티나인의 이용약관 및 개인정보처리방침에 동의하는 것으로 간주됩니다.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

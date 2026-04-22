"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Float, OrthographicCamera } from "@react-three/drei"
import { motion } from "framer-motion"
import { Sparkles, Zap, Shield, Rocket } from "lucide-react"

import { ShaderPlane, EnergyRing } from "./background-paper-shaders"

export function DemoOne() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center p-4">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={150} />
          <ambientLight intensity={0.5} />
          
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <ShaderPlane position={[-2, 1, -1]} color1="#ff5722" color2="#1a1a1a" />
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
            <ShaderPlane position={[2, -1, -2]} color1="#2196f3" color2="#1a1a1a" />
          </Float>
          
          <EnergyRing position={[0, 0, -1.5]} radius={3} />
          
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto backdrop-blur-sm bg-black/40 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-medium text-white tracking-wider uppercase">Next Generation</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Experience The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Future</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Unlock unprecedented power with our advanced WebGL shaders and real-time rendering capabilities.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-transparent text-white border border-white/20 font-semibold rounded-full hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="Lightning Fast"
              delay={0.2}
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-green-400" />}
              title="Secure Core"
              delay={0.4}
            />
            <FeatureCard 
              icon={<Rocket className="w-6 h-6 text-blue-400" />}
              title="Scalable"
              className="sm:col-span-2"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, className = "", delay = 0 }: { icon: React.ReactNode, title: string, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white/5 border border-white/10 p-6 rounded-[5px] flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group cursor-pointer ${className}`}
    >
      <div className="bg-black/50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-white font-medium">{title}</h3>
    </motion.div>
  )
}

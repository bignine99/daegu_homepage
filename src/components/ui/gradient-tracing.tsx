"use client"

import React from "react"
import { motion } from "motion/react"

interface GradientTracingProps {
  className?: string
  baseColor?: string
  gradientColors?: [string, string, string]
  animationDuration?: number
  strokeWidth?: number
  direction?: 'left-to-right' | 'right-to-left'
}

export const GradientTracing: React.FC<GradientTracingProps> = ({
  className = "",
  baseColor = "#ffffff",
  gradientColors = ["#0011ff", "#00f3ff", "#ffffff"],
  animationDuration = 2,
  strokeWidth = 2,
  direction = 'left-to-right'
}) => {
  const gradientId = `pulse-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`absolute top-[50%] pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="2"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        fill="none"
        className="overflow-visible w-full h-[3px]"
      >
        <path
          d="M0,1 L100,1"
          stroke={baseColor}
          strokeOpacity="0.2"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,1 L100,1"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <motion.linearGradient
            animate={{
              x1: direction === 'left-to-right' ? ["-100%", "200%"] : ["200%", "-100%"],
              x2: direction === 'left-to-right' ? ["-200%", "100%"] : ["100%", "-200%"],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            id={gradientId}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop offset="0.5" stopColor={gradientColors[1]} stopOpacity="1" />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}

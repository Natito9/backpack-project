'use client'
import { useState, useEffect } from 'react'
import 'animate.css'

export default function FactCards({ onDone }) {
  const [floating, setFloating] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const floatTimer = setTimeout(() => {
      setFloating(false)
      setExpanded(true)
    }, 2000)

    const endTimer = setTimeout(() => {
      if (onDone) onDone()
    }, 5000)

    return () => {
      clearTimeout(floatTimer)
      clearTimeout(endTimer)
    }
  }, [onDone])

  const facts = ['1/4 year', '3 months', '13 weeks', '92 days', '2 200h']

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {facts.map((fact, i) => {
        const offset = (i - Math.floor(facts.length / 2)) * 150
        const isFirst = i === 4

        const show = isFirst || expanded // only show first until expanded
        const animatePulse = isFirst && floating

        return (
          <div
            key={i}
            className={`
              absolute w-[20vw] h-[20vw] min-w-[100px] min-h-[100px] max-w-[200px] max-h-[200px]
              flex items-center justify-center text-center rounded-full bg-white text-black
              font-bold text-2xl md:text-3xl top-1/2 -translate-y-1/2
              transition-all duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${animatePulse ? 'animate__animated animate__pulse animate__slow' : ''}
              ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
            `}
            style={{
              transform: expanded
              ? `translate(${offset}px, 0)`
              : `translate(0px, 0)`,
              zIndex: isFirst ? 10 : 1,
            }}
          >
            {fact}
          </div>
        )
      })}
    </div>
  )
}
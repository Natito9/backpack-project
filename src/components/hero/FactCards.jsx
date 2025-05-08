'use client'
import { useState, useEffect } from 'react'

export default function FactCards({ onDone }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 1000)
    const endTimer = setTimeout(() => {
      if (onDone) onDone()
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearTimeout(endTimer)
    }
  }, [onDone])

  const facts = ['1/4 year', '3 months', '13 weeks', '92 days', '2 200h']

  return (
    <div className="absolute inset-0 flex items-center justify-center text-white">
      {facts.map((fact, i) => {
        const offset = (i - Math.floor(facts.length / 2)) * 150

        return (
          <div
            key={i}
            className="absolute w-[20vw] h-[20vw] min-w-[100px] min-h-[100px] max-w-[200px] max-h-[200px]
              flex items-center justify-center text-center rounded-full bg-white text-black
              font-bold text-2xl md:text-3xl transition-all duration-700 ease-in-out
              top-1/2 -translate-y-1/2"
            style={{
              transform: expanded
                ? `translate(${offset}px, -50%)`
                : `translate(0px, -50%)`,
            }}
          >
            {fact}
          </div>
        )
      })}
    </div>
  )
}

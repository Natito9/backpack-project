'use client'
import { useState, useEffect } from 'react'

export default function FactCards() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const facts = ['1/4 year', '3 months', '13 weeks', '92 days', '2 200h']

  return (
    <div className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden">
      {facts.map((fact, i) => {
        // Calculate position offset based on index (e.g. -2, -1, 0, 1, 2)
        const offset = (i - Math.floor(facts.length / 2)) * 150

        return (
          <div
            key={i}
            className={`absolute transition-all duration-700 ease-in-out 
              w-[20vw] h-[20vw] min-w-[100px] min-h-[100px] max-w-[200px] max-h-[200px]
              flex items-center justify-center text-center rounded-full bg-white text-black
              font-bold text-3xl 
              ${expanded ? `translate-x-[${offset}px]` : 'translate-x-0'} 
              top-1/2 -translate-y-1/2`}
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

'use client'
import { useState, useEffect } from 'react'
import 'animate.css'

export default function FactCards({ onDone }) {
  const [phase, setPhase] = useState('hidden')

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setPhase('show')
    }, 500)

    // const expandStartTimer = setTimeout(() => {
    //   setPhase('expanding')
    // }, 3000)

    const expandedTimer = setTimeout(() => {
      setPhase('expanded')
    }, 2000)

    const endTimer = setTimeout(() => {
      setPhase('done')
      if (onDone) {
        onDone()
      }
    }, 4500)

    return () => {
      clearTimeout(showTimer)
      // clearTimeout(expandStartTimer)
      clearTimeout(expandedTimer)
      clearTimeout(endTimer)
    }
  }, [onDone])

  const facts = ['1/4 year', '3 months', '13 weeks', '92 days', '2 200h']

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full">
        {facts.map((fact, i) => {
          const isCenterCard = i === Math.floor(facts.length / 2 )

          const isVisible = phase !== 'hidden'
          const isFloating =phase === 'floating' && isCenterCard
          const isExpanding = phase === 'expanding' || phase === 'expanded' || phase === 'done'

          let left = '50%'
          let translateX = '-50%'

          if (isExpanding) {
            const progress = phase === 'expanding' ? 0.5 : 1
            
            if (isCenterCard) {
              left = '50%'
            } else if (i < Math.floor(facts.length / 2)) {
              // left card
              const spacing = 20 
              const position = Math.floor(facts.length / 2) - i
              left = `${50 - (position * spacing * progress)}%`
            } else {
              // rightside card
              const spacing = 20 
              const position = i - Math.floor(facts.length / 2)
              left = `${50 + (position * spacing * progress)}%`
            }
          }

          return (
            <div
              key={i}
              className={`
                absolute left-1/2 top-1/2 
                w-[25vw] h-[25vw] min-w-[150px] min-h-[150px] max-w-[250px] max-h-[250px]
                flex items-center justify-center text-center rounded-full bg-white text-black
                font-bold text-2xl md:text-4xl
                transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${!isVisible ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
                ${isFloating ? 'animate__animated animate__pulse animate__infinite' : ''}
                shadow-lg
              `}
              style={{
                left,
                transform: `translateX(-50%) translateY(-50%)`,
                zIndex: isCenterCard ? 10 : 5 - Math.abs(Math.floor(facts.length / 2) - i),
                transitionDelay: isExpanding ? `${Math.abs(Math.floor(facts.length / 2) - i) * 120}ms` : '0ms',
              }}
            >
              {fact}
            </div>
          )
        })}        
      </div>

    </div>
  )
}
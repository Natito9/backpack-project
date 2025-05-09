'use client'
import { useState, useEffect } from 'react'
import 'animate.css'
import Image from 'next/image'
import CountUp from 'react-countup'

export default function FactCards({ onDone }) {
  const [phase, setPhase] = useState('hidden')

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setPhase('show')
    }, 500)

    const expandedTimer = setTimeout(() => {
      setPhase('expanded')
    }, 2000)

    const endTimer = setTimeout(() => {
      setPhase('done')
      if (onDone) {
        onDone()
      }
    }, 5500)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(expandedTimer)
      clearTimeout(endTimer)
    }
  }, [onDone])

  const facts = [
    {number:'1/4', unit: 'year'}, 
    {number:'3', unit: 'months'}, 
    {number:'13', unit: 'weeks'}, 
    {number:'92', unit: 'days'}, 
    {number:'2200', unit: 'hours'}
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full">
        {facts.map((fact, i) => {
          const isCenterCard = i === Math.floor(facts.length / 2 )

          const isVisible = phase !== 'hidden'
          const isFloating = phase === 'floating' && isCenterCard
          const isExpanding = phase === 'expanding' || phase === 'expanded' || phase === 'done'
          const isCountingUp = phase === 'expanded' || phase === 'done'

          let left = '50%'
          let translateX = '-50%'

          if (isExpanding) {
            const progress = phase === 'expanding' ? 0.5 : 1
            
            if (isCenterCard) {
              left = '50%'
            } else if (i < Math.floor(facts.length / 2)) {
              // left card
              const spacing = 18 
              const position = Math.floor(facts.length / 2) - i
              left = `${50 - (position * spacing * progress)}%`
            } else {
              // rightside card
              const spacing = 18 
              const position = i - Math.floor(facts.length / 2)
              left = `${50 + (position * spacing * progress)}%`
            }
          }

          return (
            <div
              key={i}
              className={`
                absolute left-1/2 top-1/2 
                w-[28vw] h-[28vw] min-w-[180px] min-h-[180px] max-w-[300px] max-h-[300px]
                flex flex-col items-center justify-center text-center rounded-full text-black bg-white
                font-bold text-2xl md:text-4xl
                transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${!isVisible ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
                ${isFloating ? 'animate__animated animate__pulse animate__infinite' : ''}
                shadow-lg overflow-hidden
              `}
              style={{
                left,
                transform: `translateX(-50%) translateY(-50%)`,
                zIndex: isCenterCard ? 10 : 5 - Math.abs(Math.floor(facts.length / 2) - i),
                transitionDelay: isExpanding ? `${Math.abs(Math.floor(facts.length / 2) - i) * 120}ms` : '0ms',
              }}
            >
              {/* background */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src='/assets/images/BACKGROUND_WEBSITE_POLY.png'
                  alt='Polygon background'
                  fill
                  className='ibject-cover'
                />
              </div>

              {/* number */}
              <div className="realative z-10 flex flex-col items-center justify-center px-4">
                <div className="text-5xl md:text-6xl">
                  {isCountingUp && fact.number.match(/^\d+$/) ? (
                    <CountUp 
                      end={parseInt(fact.number)}
                      duration={2.2}
                      separator=' '
                    />
                  ) : (
                    fact.number
                  )}
                </div>
                <div className="text-xl md:text-2xl mt-1">
                  {fact.unit}
                </div>
              </div>
            </div>
          )
        })}        
      </div>
    </div>
  )
}
import { useEffect, useRef } from 'react'

export default function Facts() {
  const el = useRef(null)

  useEffect(() => {
    class TextScramble {
      constructor(el) {
        this.el = el
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.update = this.update.bind(this)
      }

      setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => (this.resolve = resolve))
        this.queue = []

        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ''
          const to = newText[i] || ''
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          this.queue.push({ from, to, start, end })
        }

        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
      }

      update() {
        let output = ''
        let complete = 0

        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i]

          if (this.frame >= end) {
            complete++
            output += to
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar()
              this.queue[i].char = char
            }
            output += `<span class="dud">${char}</span>`
          } else {
            output += from
          }
        }

        this.el.innerHTML = output

        if (complete === this.queue.length) {
          this.resolve()
        } else {
          this.frameRequest = requestAnimationFrame(this.update)
          this.frame++
        }
      }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
      }
    }

    const phrases = ['6 HOURS A DAY', '3 FULL MONTHS A YEAR', '20 YEARS OVER A LIFETIME"']
    const fx = new TextScramble(el.current)

    let counter = 0
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2500)
      })
      counter = (counter + 1) % phrases.length
    }

    next()
  }, [])

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div ref={el} className="text-xl"></div>
    </div>
  )
}

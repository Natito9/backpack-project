import { useEffect, useRef, useState } from 'react';

export default function Facts() {
  const el = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.update = this.update.bind(this);
      }

      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];

        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = i * 2 + Math.floor(Math.random() * 10);
          const end = start + 20 + Math.floor(Math.random() * 15);
          this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }

      update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];

          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.5) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class=" text-amber-900 opacity-80">${char}</span>`;
          } else {
            output += from;
          }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
          } else {
            // Speed up the frame request to make the scramble happen faster
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const phrases = [
      '6 HOURS A DAY',
      '3 MONTHS A YEAR',
      '20 YEARS IN A LIFETIME',
      'THIS IS THE AVERAGE PRIVATE SCREENTIME OF SWEDISH TEENAGERS TODAY.',
      'WE ARE NOT HERE TO WARN.',
      'WE ARE HERE TO ACT.',
      'AND THAT ACTION IS BACKPACK.',
    ];

    const fx = new TextScramble(el.current);
    let counter = 0;

    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 3500);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <div className="flex justify-center items-center h-full w-full px-4">
      <div
        ref={el}
        className={`text-2xl md:text-6xl text-center font-bold text-amber-700 max-w-full min-h-[4.5rem] md:min-h-[6.5rem] sm:max-w-2xs md:max-w-2xl lg:max-w-3xl overflow-hidden ${isClient ? '' : 'opacity-0'}`}
      ></div>
    </div>
  );
}

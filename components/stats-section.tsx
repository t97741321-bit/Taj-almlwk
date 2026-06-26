"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { target: 12000, label: "عميل راضٍ" },
  { target: 9500, label: "ضمان إلكتروني" },
  { target: 18000, label: "سيارة تم خدمتها" },
]

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLHeadingElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const step = Math.ceil(target / 60)
            const t = setInterval(() => {
              setCount((c) => {
                const next = Math.min(c + step, target)
                if (next >= target) clearInterval(t)
                return next
              })
            }, 30)
          }
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <h2 ref={ref}>{count.toLocaleString("en-US")}</h2>
}

export function StatsSection() {
  return (
    <div className="stats-section">
      {stats.map((s) => (
        <div className="stat-item" key={s.label}>
          <Counter target={s.target} />
          <p>{s.label}</p>
        </div>
      ))}
      <div className="stat-item">
        <h2>4.9 ⭐</h2>
        <p>تقييم العملاء</p>
      </div>
    </div>
  )
}

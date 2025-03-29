"use client"

import { useState, useEffect } from "react"

export default function CursorAnimation() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  return <div className="inline-block h-16 w-0.5 bg-gray-400 mx-1" style={{ opacity: visible ? 1 : 0 }} />
}


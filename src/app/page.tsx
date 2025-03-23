"use client"

import IntroScreen from "./components/intro-screen"

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-center p-4 bg-white">
      <IntroScreen />
    </main>
  )
}
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// next-themes의 원래 Props 타입을 사용합니다
export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: any
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 
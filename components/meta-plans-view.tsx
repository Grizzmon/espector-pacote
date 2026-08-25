'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

export function MetaPlansView() {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent')
    }
  }, [])

  return null
}
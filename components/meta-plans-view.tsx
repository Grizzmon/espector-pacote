'use client'

import { useEffect } from 'react'

export function MetaPlansView() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent')
    }
  }, [])

  return null
}
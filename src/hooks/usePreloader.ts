'use client'
import { useState, useEffect } from 'react'

export function usePreloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if already loaded in this session
    if (sessionStorage.getItem('preloaded')) {
      setIsLoading(false)
    }
  }, [])

  const finishLoading = () => {
    setIsLoading(false)
    sessionStorage.setItem('preloaded', 'true')
  }

  return { isLoading, finishLoading }
}

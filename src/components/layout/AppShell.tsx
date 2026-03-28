'use client'
import { type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { Loader } from './Loader'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ContactPopup } from '@/components/ui/ContactPopup'
import { useLenis } from '@/hooks/useLenis'
import { usePreloader } from '@/hooks/usePreloader'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const { isLoading, finishLoading } = usePreloader()
  useLenis()

  return (
    <>
      <CustomCursor />

      {isLoading && <Loader onComplete={finishLoading} />}

      <Navigation />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      <ContactPopup />

      <div className="grain-overlay" />
    </>
  )
}

import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'ar' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'ar',
  setLang: () => {},
  isRTL: true,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar')

  const setLang = (l: Lang) => {
    setLangState(l)
    // Sync the html element so browser-native RTL/LTR applies globally
    document.documentElement.lang = l
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
  }

  // Set initial html attributes
  useEffect(() => {
    document.documentElement.lang = 'ar'
    document.documentElement.dir = 'rtl'
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRTL: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

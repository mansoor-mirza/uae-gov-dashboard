import { useState } from 'react'
import { LanguageProvider, useLang } from './contexts/LanguageContext'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isRTL } = useLang()

  return (
    <div className="min-h-screen bg-uae-bg" dir={isRTL ? 'rtl' : 'ltr'}>
      <TopNav
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <Sidebar open={sidebarOpen} />

      {/* Sidebar is on the right in RTL, left in LTR */}
      <main className={`pt-16 min-h-screen ${isRTL ? 'md:pr-64' : 'md:pl-64'}`}>
        <div className="px-4 md:px-6 py-6 max-w-screen-2xl mx-auto">
          <Dashboard />
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}

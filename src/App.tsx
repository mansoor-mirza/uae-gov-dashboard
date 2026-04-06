import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-uae-bg" dir="rtl">
      <TopNav
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <Sidebar open={sidebarOpen} />

      {/* Main content — offset for fixed sidebar (desktop) and topnav */}
      <main className="pt-16 md:pr-64 min-h-screen">
        <div className="px-4 md:px-6 py-6 max-w-screen-2xl mx-auto">
          <Dashboard />
        </div>
      </main>
    </div>
  )
}

import { useState } from 'react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

function UAEEmblem() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="17" stroke="#c78b29" strokeWidth="2" fill="none" />
      <path d="M18 4 L20 14 L30 14 L22 20 L25 30 L18 24 L11 30 L14 20 L6 14 L16 14 Z" fill="#c78b29" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a6 6 0 0 0-6 6v2.586l-1.707 1.707A1 1 0 0 0 3 14h14a1 1 0 0 0 .707-1.707L16 10.586V8a6 6 0 0 0-6-6Z" />
      <path d="M10 18a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.5 12.5 L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface TopNavProps {
  onMenuToggle: () => void
  sidebarOpen: boolean
}

export default function TopNav({ onMenuToggle, sidebarOpen }: TopNavProps) {
  const { lang, isRTL } = useLang()
  const tr = t[lang]
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const notifs = [
    { text: tr.notif1, time: tr.notif1Time },
    { text: tr.notif2, time: tr.notif2Time },
    { text: tr.notif3, time: tr.notif3Time },
  ]

  return (
    <header className="fixed top-0 right-0 left-0 z-30 bg-uae-dark shadow-uae-nav h-16 flex items-center px-4 md:px-6">
      <div className="flex items-center justify-between w-full gap-4">

        {/* Ministry name — always on the leading side */}
        <div className="flex items-center gap-3">
          <UAEEmblem />
          <div className="hidden sm:block">
            <p className={`text-white font-bold text-sm leading-tight ${isRTL ? 'font-arabic' : 'font-body'}`}>
              {tr.ministry}
            </p>
            <p className={`text-uae-gold-light text-xs ${isRTL ? 'font-arabic' : 'font-body'}`}>
              {tr.uae}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <div className={`absolute inset-y-0 flex items-center text-uae-text-muted pointer-events-none ${isRTL ? 'right-3' : 'left-3'}`}>
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder={tr.searchPlaceholder}
              dir={isRTL ? 'rtl' : 'ltr'}
              className={`w-full bg-uae-sidebar-hover text-white placeholder-gray-500 rounded-uae-md py-2 text-sm focus:outline-none focus:ring-1 focus:ring-uae-gold ${isRTL ? 'font-arabic pr-10 pl-4' : 'font-body pl-10 pr-4'}`}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false) }}
              className="relative p-2 text-gray-400 hover:text-uae-gold rounded-uae-md hover:bg-uae-sidebar-hover transition-colors"
            >
              <BellIcon />
              <span className="absolute top-1.5 left-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            {notifOpen && (
              <div
                className={`absolute mt-2 w-72 bg-white rounded-uae-lg shadow-uae-nav border border-uae-border z-50 ${isRTL ? 'left-0' : 'right-0'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className={`font-bold text-uae-title text-sm ${isRTL ? 'font-arabic' : 'font-body'}`}>
                    {tr.notifications}
                  </p>
                </div>
                {notifs.map((n, i) => (
                  <div key={i} className="px-4 py-3 hover:bg-uae-bg cursor-pointer border-b border-gray-50 last:border-0">
                    <p className={`text-sm text-uae-text ${isRTL ? 'font-arabic' : 'font-body'}`}>{n.text}</p>
                    <p className={`text-xs text-uae-text-muted mt-0.5 ${isRTL ? 'font-arabic' : 'font-body'}`}>{n.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false) }}
              className="flex items-center gap-2 px-2 py-1.5 rounded-uae-md hover:bg-uae-sidebar-hover transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-uae-gold flex items-center justify-center text-white font-bold text-sm">
                {tr.userInitial}
              </div>
              <div className={`hidden sm:block ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className={`text-white text-xs font-bold leading-tight ${isRTL ? 'font-arabic' : 'font-body'}`}>
                  {tr.userName}
                </p>
                <p className={`text-gray-400 text-xs ${isRTL ? 'font-arabic' : 'font-body'}`}>
                  {tr.userRole}
                </p>
              </div>
              <span className="text-gray-400 hidden sm:block"><ChevronDownIcon /></span>
            </button>
            {profileOpen && (
              <div
                className={`absolute mt-2 w-48 bg-white rounded-uae-lg shadow-uae-nav border border-uae-border z-50 ${isRTL ? 'left-0' : 'right-0'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {tr.profileMenu.map((item, i) => (
                  <button
                    key={i}
                    className={`w-full px-4 py-2.5 text-sm text-uae-text hover:bg-uae-bg transition-colors first:rounded-t-uae-lg last:rounded-b-uae-lg last:text-red-600 ${isRTL ? 'text-right font-arabic' : 'text-left font-body'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 text-gray-400 hover:text-white rounded-uae-md hover:bg-uae-sidebar-hover transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {sidebarOpen
                ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              }
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

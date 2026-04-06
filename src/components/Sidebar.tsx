interface NavItem {
  label: string
  icon: React.ReactNode
  active?: boolean
  badge?: number
}

function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm0 9a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3zm9-9a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V4zm0 9a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3z" />
    </svg>
  )
}

function ServicesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  )
}

function RequestsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
  )
}

function CitizensIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  )
}

function ReportsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

function LicensesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  )
}

const mainNavItems: NavItem[] = [
  { label: 'لوحة التحكم', icon: <DashboardIcon />, active: true },
  { label: 'الخدمات الحكومية', icon: <ServicesIcon /> },
  { label: 'الطلبات', icon: <RequestsIcon />, badge: 12 },
  { label: 'المواطنون', icon: <CitizensIcon /> },
  { label: 'التراخيص', icon: <LicensesIcon />, badge: 3 },
  { label: 'التقارير والإحصاءات', icon: <ReportsIcon /> },
]

const bottomNavItems: NavItem[] = [
  { label: 'الدعم والمساعدة', icon: <SupportIcon /> },
  { label: 'الإعدادات', icon: <SettingsIcon /> },
]

function NavItemButton({ item }: { item: NavItem }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-uae-md text-sm font-arabic transition-all duration-150 group ${
        item.active
          ? 'bg-uae-gold text-white font-bold'
          : 'text-gray-400 hover:bg-uae-sidebar-hover hover:text-white'
      }`}
    >
      <span className={`shrink-0 ${item.active ? 'text-white' : 'text-gray-500 group-hover:text-uae-gold'}`}>
        {item.icon}
      </span>
      <span className="flex-1 text-right">{item.label}</span>
      {item.badge !== undefined && (
        <span className={`shrink-0 min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold flex items-center justify-center ${
          item.active ? 'bg-white text-uae-gold' : 'bg-uae-gold text-white'
        }`}>
          {item.badge}
        </span>
      )}
    </button>
  )
}

interface SidebarProps {
  open: boolean
}

export default function Sidebar({ open }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" />
      )}

      <aside
        className={`fixed top-16 bottom-0 right-0 w-64 bg-uae-sidebar z-20 flex flex-col transition-transform duration-300 scrollbar-thin overflow-y-auto ${
          open ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
      >
        {/* Ministry info */}
        <div className="px-4 py-4 border-b border-gray-800">
          <p className="text-xs font-arabic text-gray-500 mb-1">القسم الحالي</p>
          <p className="text-sm font-arabic font-bold text-uae-gold">إدارة الخدمات المدنية</p>
        </div>

        {/* Main navigation */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          <p className="text-xs font-arabic text-gray-600 px-1 mb-2 uppercase tracking-wide">القائمة الرئيسية</p>
          {mainNavItems.map((item, i) => (
            <NavItemButton key={i} item={item} />
          ))}
        </nav>

        {/* Bottom navigation */}
        <div className="px-3 py-4 border-t border-gray-800 flex flex-col gap-1">
          {bottomNavItems.map((item, i) => (
            <NavItemButton key={i} item={item} />
          ))}
        </div>

        {/* Version */}
        <div className="px-4 pb-4">
          <p className="text-xs text-gray-700 font-arabic">الإصدار 2.4.1</p>
        </div>
      </aside>
    </>
  )
}

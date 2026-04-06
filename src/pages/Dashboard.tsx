import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import StatCard from '../components/StatCard'
import ServiceCard from '../components/ServiceCard'
import RecentRequestsTable from '../components/RecentRequestsTable'
import QuickActions from '../components/QuickActions'
import ActivityFeed from '../components/ActivityFeed'

// Stat icons
function UsersIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 110-10 5 5 0 010 10zm0 2c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z" /></svg>
}
function ServicesIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5 4a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm2 0v16h10V4H7zm2 3h6v2H9V7zm0 4h6v2H9v-2zm0 4h4v2H9v-2z" clipRule="evenodd" /></svg>
}
function ClockIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 2a8 8 0 110 16A8 8 0 0112 4zm1 4v5.414l3.293 3.293-1.414 1.414L11 14.586V8h2z" clipRule="evenodd" /></svg>
}
function CheckIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2a10 10 0 100 20A10 10 0 0012 2zm4.707 7.293a1 1 0 00-1.414 0L11 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
}

// Service icons
function BuildingIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 21V7l9-4 9 4v14H3zm2-2h5v-4h4v4h5V8.4l-7-3.11L5 8.4V19zm3-8h2v2H8v-2zm4 0h2v2h-2v-2zm-4 4h2v2H8v-2z" clipRule="evenodd" /></svg>
}
function PassportIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 3a4 4 0 100 8 4 4 0 000-6zm-3 4a3 3 0 116 0 3 3 0 01-6 0zm-2 7h10v1H7v-1z" clipRule="evenodd" /></svg>
}
function PermitIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
}
function HealthIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" clipRule="evenodd" /></svg>
}
function LicenseIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-3.382l-.724-1.447A1 1 0 0015 2H9zm-1 8a4 4 0 108 0 4 4 0 00-8 0zm4 2a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" /></svg>
}
function EducationIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18V16c0 1.1 3.04 3 7 3s7-1.9 7-3v-4.82L23 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 16c0 .5-2.13 1.5-5 1.5S7 16.5 7 16v-3.73l5 2.73 5-2.73V16z" /></svg>
}

const serviceIcons = [PassportIcon, LicenseIcon, PermitIcon, BuildingIcon, HealthIcon, EducationIcon]
const serviceStatuses: ('active' | 'pending' | 'new')[] = ['active', 'active', 'pending', 'active', 'new', 'active']
const serviceRequests = [4821, 2340, 987, 6102, 311, 1452]

export default function Dashboard() {
  const { lang, isRTL } = useLang()
  const tr = t[lang]
  const fontClass = isRTL ? 'font-arabic' : 'font-body'

  return (
    <div className="space-y-6">
      {/* Hero banner */}
      <div className="relative bg-uae-dark rounded-uae-xl overflow-hidden min-h-[180px] flex items-center px-8 py-8">
        <div className={`absolute top-0 bottom-0 w-2 bg-uae-gold ${isRTL ? 'right-0' : 'left-0'}`} />
        <div className={`absolute bottom-0 w-64 h-64 rounded-full bg-uae-gold/5 translate-y-1/3 ${isRTL ? 'left-0 -translate-x-1/3' : 'right-0 translate-x-1/3'}`} />
        <div className={`absolute top-0 w-40 h-40 rounded-full bg-uae-gold/10 -translate-y-1/2 ${isRTL ? 'left-20' : 'right-20'}`} />
        <div className="relative z-10">
          <p className={`text-uae-gold text-sm mb-1 ${fontClass}`}>{tr.welcomeBack}</p>
          <h1 className={`font-extrabold text-white text-3xl md:text-4xl leading-tight mb-3 ${fontClass}`}>
            {tr.heroName}
          </h1>
          <p className={`text-gray-400 text-sm max-w-lg leading-relaxed ${fontClass}`}>
            {tr.heroSubtitle}
            <span className="block mt-0.5 text-gray-500">{tr.heroDate}</span>
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className={`bg-uae-gold text-white font-bold text-sm px-5 py-2.5 rounded-uae-md hover:bg-uae-link transition-colors ${fontClass}`}>
              {tr.newRequest}
            </button>
            <button className={`bg-transparent border border-uae-gold-light text-uae-gold-light font-bold text-sm px-5 py-2.5 rounded-uae-md hover:bg-uae-gold/10 transition-colors ${fontClass}`}>
              {tr.viewReports}
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title={tr.statCitizens} value="247,384" change="+8.2%" changeType="up" icon={<UsersIcon />} accent />
        <StatCard title={tr.statServices} value="184" change="+12" changeType="up" icon={<ServicesIcon />} />
        <StatCard title={tr.statPending} value="1,293" change="-6.4%" changeType="down" icon={<ClockIcon />} />
        <StatCard title={tr.statCompleted} value="538" change={tr.statCompletedChange} changeType="neutral" icon={<CheckIcon />} />
      </div>

      {/* Services */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className={`font-bold text-uae-title text-lg ${fontClass}`}>{tr.servicesTitle}</h2>
          <button className={`text-sm text-uae-link hover:text-uae-gold font-bold transition-colors ${fontClass}`}>
            {tr.viewAllServices}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tr.services.map((svc, i) => {
            const Icon = serviceIcons[i]
            return (
              <ServiceCard
                key={i}
                title={svc.title}
                description={svc.description}
                icon={<Icon />}
                status={serviceStatuses[i]}
                requests={serviceRequests[i]}
              />
            )
          })}
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <RecentRequestsTable />
        </div>
        <div className="flex flex-col gap-4">
          <QuickActions />
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

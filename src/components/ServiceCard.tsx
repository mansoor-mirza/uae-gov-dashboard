import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status: 'active' | 'pending' | 'new'
  requests: number
}

function CaretIcon({ isRTL }: { isRTL: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={isRTL ? '' : 'rotate-180'}>
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 010 1.414L6.414 8l3.879 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function ServiceCard({ title, description, icon, status, requests }: ServiceCardProps) {
  const { lang, isRTL } = useLang()
  const tr = t[lang]
  const fontClass = isRTL ? 'font-arabic' : 'font-body'

  const statusConfig = {
    active: { label: tr.statusLabels.active, className: 'bg-uae-success-bg text-uae-success' },
    pending: { label: tr.statusLabels.pending, className: 'bg-uae-warning-bg text-uae-warning' },
    new: { label: tr.statusLabels.new, className: 'bg-uae-info-bg text-uae-info' },
  }

  const { label, className: statusClass } = statusConfig[status]

  return (
    <div className="bg-uae-card border border-uae-border rounded-uae-lg p-6 flex flex-col gap-4 shadow-uae-card hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-uae-md bg-uae-gold-pale flex items-center justify-center text-uae-gold">
          {icon}
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusClass} ${fontClass}`}>
          {label}
        </span>
      </div>
      <h3 className={`font-extrabold text-uae-title text-lg leading-snug ${fontClass}`}>
        {title}
      </h3>
      <p className={`text-sm text-uae-text-muted leading-relaxed flex-1 ${fontClass}`}>
        {description}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className={`text-xs text-uae-text-muted ${fontClass}`}>
          {requests.toLocaleString(isRTL ? 'ar-AE' : 'en-AE')} {tr.requestsUnit}
        </span>
        <button className={`flex items-center gap-1 text-uae-link text-sm font-bold hover:text-uae-gold transition-colors group-hover:gap-2 duration-150 ${fontClass}`}>
          {tr.viewDetails}
          <CaretIcon isRTL={isRTL} />
        </button>
      </div>
    </div>
  )
}

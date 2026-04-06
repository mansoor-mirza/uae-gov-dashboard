import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

export default function RecentRequestsTable() {
  const { lang, isRTL } = useLang()
  const tr = t[lang]
  const fontClass = isRTL ? 'font-arabic' : 'font-body'

  const statusConfig = {
    approved: { label: tr.tableStatusLabels.approved, className: 'bg-uae-success-bg text-uae-success' },
    pending: { label: tr.tableStatusLabels.pending, className: 'bg-uae-warning-bg text-uae-warning' },
    rejected: { label: tr.tableStatusLabels.rejected, className: 'bg-uae-error-bg text-uae-error' },
    processing: { label: tr.tableStatusLabels.processing, className: 'bg-uae-info-bg text-uae-info' },
  }

  return (
    <div className="bg-uae-card border border-uae-border rounded-uae-lg shadow-uae-card overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className={`font-bold text-uae-title text-base ${fontClass}`}>{tr.recentRequests}</h2>
        <button className={`text-sm text-uae-link hover:text-uae-gold font-bold transition-colors ${fontClass}`}>
          {tr.viewAll}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
          <thead>
            <tr className="bg-uae-bg">
              {[tr.colId, tr.colService, tr.colCitizen, tr.colDate, tr.colStatus].map((col, i) => (
                <th
                  key={i}
                  className={`px-6 py-3 text-xs font-bold text-uae-text-muted uppercase tracking-wide ${fontClass} ${isRTL ? 'text-right' : 'text-left'} ${i >= 2 ? (i === 2 ? 'hidden md:table-cell' : 'hidden lg:table-cell') : ''}`}
                >
                  {col}
                </th>
              ))}
              <th className="px-6 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tr.requests.map((req) => {
              const { label, className: statusClass } = statusConfig[req.status]
              return (
                <tr key={req.id} className="hover:bg-uae-bg/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-display font-bold text-uae-gold text-sm">{req.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm text-uae-text ${fontClass}`}>{req.service}</span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className={`text-sm text-uae-text-muted ${fontClass}`}>{req.citizen}</span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className={`text-sm text-uae-text-muted ${fontClass}`}>{req.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusClass} ${fontClass}`}>
                      {label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className={`text-xs text-uae-link hover:text-uae-gold font-bold transition-colors ${fontClass}`}>
                      {tr.view}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

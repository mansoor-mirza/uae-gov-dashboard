import { useLang } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'

const typeDot = {
  approve: 'bg-uae-success',
  reject: 'bg-uae-error',
  create: 'bg-uae-gold',
  update: 'bg-uae-info',
}

const typeChip = {
  approve: 'bg-uae-success-bg text-uae-success',
  reject: 'bg-uae-error-bg text-uae-error',
  create: 'bg-uae-gold-pale text-uae-gold',
  update: 'bg-uae-info-bg text-uae-info',
}

export default function ActivityFeed() {
  const { lang, isRTL } = useLang()
  const tr = t[lang]
  const fontClass = isRTL ? 'font-arabic' : 'font-body'

  return (
    <div className="bg-uae-card border border-uae-border rounded-uae-lg shadow-uae-card">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className={`font-bold text-uae-title text-base ${fontClass}`}>{tr.activityTitle}</h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {tr.activities.map((act, i) => (
          <li key={i} className="px-6 py-4 flex items-start gap-3">
            <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${typeDot[act.type]}`} />
            <div className="flex-1 min-w-0">
              <p className={`text-sm text-uae-text leading-relaxed ${fontClass}`}>
                <span className="font-bold">{act.actor}</span>
                {' '}{act.action}{' '}
                <span className={`font-bold px-1.5 py-0.5 rounded text-xs ${typeChip[act.type]}`}>
                  {act.target}
                </span>
              </p>
              <p className={`text-xs text-uae-text-muted mt-1 ${fontClass}`}>{act.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-6 py-3 border-t border-gray-100">
        <button className={`text-sm text-uae-link hover:text-uae-gold font-bold transition-colors ${fontClass}`}>
          {tr.viewFullLog}
        </button>
      </div>
    </div>
  )
}

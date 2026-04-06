import { useLang } from '../contexts/LanguageContext'

interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: 'up' | 'down' | 'neutral'
  icon: React.ReactNode
  accent?: boolean
}

function TrendUpIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L11.586 6H3a1 1 0 110-2h8.586l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
}
function TrendDownIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path fillRule="evenodd" d="M10.293 10.707a1 1 0 001.414 0l2-2a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 1.414L11.586 8H3a1 1 0 100 2h8.586l-1.293 1.293a1 1 0 000 1.414z" clipRule="evenodd" /></svg>
}

export default function StatCard({ title, value, change, changeType, icon, accent }: StatCardProps) {
  const { isRTL } = useLang()

  return (
    <div className={`rounded-uae-lg border p-6 flex flex-col gap-4 shadow-uae-card transition-shadow hover:shadow-md ${
      accent ? 'bg-uae-gold border-uae-gold text-white' : 'bg-uae-card border-uae-border'
    }`}>
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-uae-md flex items-center justify-center ${accent ? 'bg-white/20' : 'bg-uae-gold-pale'}`}>
          <span className={accent ? 'text-white' : 'text-uae-gold'}>{icon}</span>
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${isRTL ? 'font-arabic' : 'font-body'} ${
          changeType === 'up'
            ? accent ? 'bg-white/20 text-white' : 'bg-uae-success-bg text-uae-success'
            : changeType === 'down'
            ? accent ? 'bg-white/20 text-white' : 'bg-uae-error-bg text-uae-error'
            : accent ? 'bg-white/20 text-white' : 'bg-gray-100 text-uae-text-muted'
        }`}>
          {changeType === 'up' && <TrendUpIcon />}
          {changeType === 'down' && <TrendDownIcon />}
          {change}
        </div>
      </div>
      <div>
        <p className={`text-3xl font-display font-extrabold leading-none mb-1 ${accent ? 'text-white' : 'text-uae-title'}`}>
          {value}
        </p>
        <p className={`text-sm ${accent ? 'text-white/80' : 'text-uae-text-muted'} ${isRTL ? 'font-arabic' : 'font-body'}`}>
          {title}
        </p>
      </div>
    </div>
  )
}

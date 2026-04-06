interface Activity {
  actor: string
  action: string
  target: string
  time: string
  type: 'approve' | 'reject' | 'create' | 'update'
}

const activities: Activity[] = [
  { actor: 'م. سارة الفلاسي', action: 'اعتمدت طلب', target: 'تجديد الإقامة #8821', time: 'منذ 8 دقائق', type: 'approve' },
  { actor: 'م. عمر البلوشي', action: 'أنشأ طلباً جديداً', target: 'رخصة تجارية #8820', time: 'منذ 22 دقيقة', type: 'create' },
  { actor: 'م. ليلى الرميثي', action: 'حدّثت بيانات', target: 'ملف المواطن #C-4451', time: 'منذ ساعة', type: 'update' },
  { actor: 'م. حمد السويدي', action: 'رفض طلب', target: 'تصريح بناء #8817', time: 'منذ ساعتين', type: 'reject' },
  { actor: 'النظام', action: 'أرسل إشعاراً تلقائياً لـ', target: '٣٤ مواطناً', time: 'منذ ٣ ساعات', type: 'update' },
]

const typeConfig = {
  approve: 'bg-uae-success-bg text-uae-success',
  reject: 'bg-uae-error-bg text-uae-error',
  create: 'bg-uae-gold-pale text-uae-gold',
  update: 'bg-uae-info-bg text-uae-info',
}

const typeDot = {
  approve: 'bg-uae-success',
  reject: 'bg-uae-error',
  create: 'bg-uae-gold',
  update: 'bg-uae-info',
}

export default function ActivityFeed() {
  return (
    <div className="bg-uae-card border border-uae-border rounded-uae-lg shadow-uae-card">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="font-arabic font-bold text-uae-title text-base">سجل النشاط</h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {activities.map((act, i) => (
          <li key={i} className="px-6 py-4 flex items-start gap-3">
            <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${typeDot[act.type]}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-arabic text-uae-text leading-relaxed">
                <span className="font-bold">{act.actor}</span>
                {' '}{act.action}{' '}
                <span className={`font-bold px-1.5 py-0.5 rounded text-xs ${typeConfig[act.type]}`}>
                  {act.target}
                </span>
              </p>
              <p className="text-xs font-arabic text-uae-text-muted mt-1">{act.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-6 py-3 border-t border-gray-100">
        <button className="text-sm font-arabic text-uae-link hover:text-uae-gold font-bold transition-colors">
          عرض السجل الكامل
        </button>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status: 'active' | 'pending' | 'new'
  requests: number
}

function CaretLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 010 1.414L6.414 8l3.879 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

const statusConfig = {
  active: { label: 'نشط', className: 'bg-uae-success-bg text-uae-success' },
  pending: { label: 'قيد المراجعة', className: 'bg-uae-warning-bg text-uae-warning' },
  new: { label: 'جديد', className: 'bg-uae-info-bg text-uae-info' },
}

export default function ServiceCard({ title, description, icon, status, requests }: ServiceCardProps) {
  const { label, className: statusClass } = statusConfig[status]

  return (
    <div className="bg-uae-card border border-uae-border rounded-uae-lg p-6 flex flex-col gap-4 shadow-uae-card hover:shadow-md transition-shadow cursor-pointer group">
      {/* Icon + Status */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-uae-md bg-uae-gold-pale flex items-center justify-center text-uae-gold">
          {icon}
        </div>
        <span className={`text-xs font-arabic font-bold px-2.5 py-1 rounded-full ${statusClass}`}>
          {label}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-arabic font-extrabold text-uae-title text-lg leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm font-arabic text-uae-text-muted leading-relaxed flex-1">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-xs font-arabic text-uae-text-muted">
          {requests.toLocaleString('ar-AE')} طلب
        </span>
        <button className="flex items-center gap-1 text-uae-link text-sm font-arabic font-bold hover:text-uae-gold transition-colors group-hover:gap-2 duration-150">
          عرض التفاصيل
          <CaretLeftIcon />
        </button>
      </div>
    </div>
  )
}

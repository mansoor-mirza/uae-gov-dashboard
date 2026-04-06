interface Request {
  id: string
  service: string
  citizen: string
  date: string
  status: 'approved' | 'pending' | 'rejected' | 'processing'
}

const requests: Request[] = [
  { id: '#8821', service: 'تجديد الإقامة', citizen: 'أحمد محمد الهاشمي', date: '٦ أبريل ٢٠٢٦', status: 'approved' },
  { id: '#8820', service: 'رخصة تجارية', citizen: 'فاطمة علي الزعابي', date: '٦ أبريل ٢٠٢٦', status: 'pending' },
  { id: '#8819', service: 'شهادة ميلاد', citizen: 'خالد سعيد المنصوري', date: '٥ أبريل ٢٠٢٦', status: 'approved' },
  { id: '#8818', service: 'تصريح بناء', citizen: 'مريم حمد الكتبي', date: '٥ أبريل ٢٠٢٦', status: 'processing' },
  { id: '#8817', service: 'جواز سفر', citizen: 'سالم راشد النعيمي', date: '٤ أبريل ٢٠٢٦', status: 'rejected' },
  { id: '#8816', service: 'استخراج هوية', citizen: 'نورة سعد الشامسي', date: '٤ أبريل ٢٠٢٦', status: 'approved' },
]

const statusConfig = {
  approved: { label: 'مقبول', className: 'bg-uae-success-bg text-uae-success' },
  pending: { label: 'قيد الانتظار', className: 'bg-uae-warning-bg text-uae-warning' },
  rejected: { label: 'مرفوض', className: 'bg-uae-error-bg text-uae-error' },
  processing: { label: 'قيد المعالجة', className: 'bg-uae-info-bg text-uae-info' },
}

export default function RecentRequestsTable() {
  return (
    <div className="bg-uae-card border border-uae-border rounded-uae-lg shadow-uae-card overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-arabic font-bold text-uae-title text-base">أحدث الطلبات</h2>
        <button className="text-sm font-arabic text-uae-link hover:text-uae-gold font-bold transition-colors">
          عرض الكل
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full" dir="rtl">
          <thead>
            <tr className="bg-uae-bg">
              <th className="text-right px-6 py-3 text-xs font-arabic font-bold text-uae-text-muted uppercase tracking-wide">رقم الطلب</th>
              <th className="text-right px-6 py-3 text-xs font-arabic font-bold text-uae-text-muted uppercase tracking-wide">الخدمة</th>
              <th className="text-right px-6 py-3 text-xs font-arabic font-bold text-uae-text-muted uppercase tracking-wide hidden md:table-cell">المواطن</th>
              <th className="text-right px-6 py-3 text-xs font-arabic font-bold text-uae-text-muted uppercase tracking-wide hidden lg:table-cell">التاريخ</th>
              <th className="text-right px-6 py-3 text-xs font-arabic font-bold text-uae-text-muted uppercase tracking-wide">الحالة</th>
              <th className="px-6 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requests.map((req) => {
              const { label, className: statusClass } = statusConfig[req.status]
              return (
                <tr key={req.id} className="hover:bg-uae-bg/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-display font-bold text-uae-gold text-sm">{req.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-arabic text-sm text-uae-text">{req.service}</span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="font-arabic text-sm text-uae-text-muted">{req.citizen}</span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="font-arabic text-sm text-uae-text-muted">{req.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-arabic font-bold px-2.5 py-1 rounded-full ${statusClass}`}>
                      {label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-left">
                    <button className="text-xs font-arabic text-uae-link hover:text-uae-gold font-bold transition-colors">
                      عرض
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

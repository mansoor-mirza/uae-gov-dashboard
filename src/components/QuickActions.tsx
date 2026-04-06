interface QuickAction {
  label: string
  description: string
  icon: React.ReactNode
  color: string
}

function PlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path fillRule="evenodd" d="M11 3a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H4a1 1 0 110-2h6V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 3.414 7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M11 4a1 1 0 011 1v9a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L11 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M11 4a1 1 0 011 1v8a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  )
}

function UserAddIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
    </svg>
  )
}

const actions: QuickAction[] = [
  {
    label: 'طلب جديد',
    description: 'إنشاء طلب خدمة',
    icon: <PlusIcon />,
    color: 'bg-uae-gold-pale text-uae-gold hover:bg-uae-gold hover:text-white',
  },
  {
    label: 'رفع مستند',
    description: 'تحميل ملف رسمي',
    icon: <UploadIcon />,
    color: 'bg-uae-info-bg text-uae-info hover:bg-uae-info hover:text-white',
  },
  {
    label: 'تصدير تقرير',
    description: 'تنزيل ملف PDF/Excel',
    icon: <DownloadIcon />,
    color: 'bg-uae-success-bg text-uae-success hover:bg-uae-success hover:text-white',
  },
  {
    label: 'إضافة مستخدم',
    description: 'تسجيل موظف جديد',
    icon: <UserAddIcon />,
    color: 'bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white',
  },
]

export default function QuickActions() {
  return (
    <div className="bg-uae-card border border-uae-border rounded-uae-lg shadow-uae-card">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="font-arabic font-bold text-uae-title text-base">الإجراءات السريعة</h2>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {actions.map((action, i) => (
          <button
            key={i}
            className={`flex flex-col items-center gap-2 p-4 rounded-uae-md transition-all duration-150 ${action.color}`}
          >
            {action.icon}
            <span className="font-arabic font-bold text-sm text-center">{action.label}</span>
            <span className="font-arabic text-xs text-center opacity-75">{action.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

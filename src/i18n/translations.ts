export const t = {
  ar: {
    // TopNav
    ministry: 'وزارة الداخلية',
    uae: 'الإمارات العربية المتحدة',
    searchPlaceholder: 'بحث في الخدمات والتقارير...',
    notifications: 'الإشعارات',
    notif1: 'تم اعتماد طلب الترخيص #4821',
    notif1Time: 'منذ 5 دقائق',
    notif2: 'طلب جديد يحتاج مراجعة',
    notif2Time: 'منذ 23 دقيقة',
    notif3: 'تقرير الأداء الشهري جاهز',
    notif3Time: 'منذ ساعة',
    userName: 'محمد الشامسي',
    userRole: 'مدير النظام',
    userInitial: 'م',
    profileMenu: ['الملف الشخصي', 'الإعدادات', 'تسجيل الخروج'],

    // Sidebar
    currentSection: 'القسم الحالي',
    department: 'إدارة الخدمات المدنية',
    mainMenu: 'القائمة الرئيسية',
    navItems: [
      'لوحة التحكم',
      'الخدمات الحكومية',
      'الطلبات',
      'المواطنون',
      'التراخيص',
      'التقارير والإحصاءات',
    ],
    support: 'الدعم والمساعدة',
    settings: 'الإعدادات',
    version: 'الإصدار 2.4.1',
    language: 'اللغة',

    // Dashboard hero
    welcomeBack: 'مرحباً بعودتك،',
    heroName: 'محمد الشامسي',
    heroSubtitle: 'لوحة التحكم الرئيسية — وزارة الداخلية، إدارة الخدمات المدنية',
    heroDate: 'الأحد، ٦ أبريل ٢٠٢٦',
    newRequest: 'إنشاء طلب جديد',
    viewReports: 'عرض التقارير',

    // Stat cards
    statCitizens: 'المواطنون المسجّلون',
    statServices: 'الخدمات النشطة',
    statPending: 'الطلبات المعلّقة',
    statCompleted: 'مُنجز اليوم',
    statCompletedChange: '٩١٪ إنجاز',

    // Services section
    servicesTitle: 'الخدمات الحكومية',
    viewAllServices: 'عرض جميع الخدمات',
    services: [
      {
        title: 'تجديد الإقامة والتأشيرات',
        description: 'تجديد تصاريح الإقامة والتأشيرات للمقيمين في الدولة.',
      },
      {
        title: 'التراخيص التجارية والصناعية',
        description: 'إصدار وتجديد الرخص التجارية للشركات والمنشآت.',
      },
      {
        title: 'تصاريح البناء والعقارات',
        description: 'معالجة طلبات تصاريح البناء ومشاريع العقارات.',
      },
      {
        title: 'السجلات المدنية والأحوال',
        description: 'استخراج شهادات الميلاد والوفاة وبطاقات الهوية.',
      },
      {
        title: 'خدمات الرعاية الصحية',
        description: 'التسجيل في البرامج الصحية الحكومية والتأمين الصحي.',
      },
      {
        title: 'المنح الدراسية والتعليم',
        description: 'التقديم على المنح الحكومية والخدمات التعليمية.',
      },
    ],

    // Service card
    statusLabels: {
      active: 'نشط',
      pending: 'قيد المراجعة',
      new: 'جديد',
    },
    requestsUnit: 'طلب',
    viewDetails: 'عرض التفاصيل',

    // Table
    recentRequests: 'أحدث الطلبات',
    viewAll: 'عرض الكل',
    colId: 'رقم الطلب',
    colService: 'الخدمة',
    colCitizen: 'المواطن',
    colDate: 'التاريخ',
    colStatus: 'الحالة',
    view: 'عرض',
    tableStatusLabels: {
      approved: 'مقبول',
      pending: 'قيد الانتظار',
      rejected: 'مرفوض',
      processing: 'قيد المعالجة',
    },
    requests: [
      { id: '#8821', service: 'تجديد الإقامة', citizen: 'أحمد محمد الهاشمي', date: '٦ أبريل ٢٠٢٦', status: 'approved' },
      { id: '#8820', service: 'رخصة تجارية', citizen: 'فاطمة علي الزعابي', date: '٦ أبريل ٢٠٢٦', status: 'pending' },
      { id: '#8819', service: 'شهادة ميلاد', citizen: 'خالد سعيد المنصوري', date: '٥ أبريل ٢٠٢٦', status: 'approved' },
      { id: '#8818', service: 'تصريح بناء', citizen: 'مريم حمد الكتبي', date: '٥ أبريل ٢٠٢٦', status: 'processing' },
      { id: '#8817', service: 'جواز سفر', citizen: 'سالم راشد النعيمي', date: '٤ أبريل ٢٠٢٦', status: 'rejected' },
      { id: '#8816', service: 'استخراج هوية', citizen: 'نورة سعد الشامسي', date: '٤ أبريل ٢٠٢٦', status: 'approved' },
    ] as { id: string; service: string; citizen: string; date: string; status: 'approved' | 'pending' | 'rejected' | 'processing' }[],

    // Quick actions
    quickActionsTitle: 'الإجراءات السريعة',
    quickActions: [
      { label: 'طلب جديد', description: 'إنشاء طلب خدمة' },
      { label: 'رفع مستند', description: 'تحميل ملف رسمي' },
      { label: 'تصدير تقرير', description: 'تنزيل ملف PDF/Excel' },
      { label: 'إضافة مستخدم', description: 'تسجيل موظف جديد' },
    ],

    // Activity feed
    activityTitle: 'سجل النشاط',
    viewFullLog: 'عرض السجل الكامل',
    activities: [
      { actor: 'م. سارة الفلاسي', action: 'اعتمدت طلب', target: 'تجديد الإقامة #8821', time: 'منذ 8 دقائق', type: 'approve' },
      { actor: 'م. عمر البلوشي', action: 'أنشأ طلباً جديداً', target: 'رخصة تجارية #8820', time: 'منذ 22 دقيقة', type: 'create' },
      { actor: 'م. ليلى الرميثي', action: 'حدّثت بيانات', target: 'ملف المواطن #C-4451', time: 'منذ ساعة', type: 'update' },
      { actor: 'م. حمد السويدي', action: 'رفض طلب', target: 'تصريح بناء #8817', time: 'منذ ساعتين', type: 'reject' },
      { actor: 'النظام', action: 'أرسل إشعاراً تلقائياً لـ', target: '٣٤ مواطناً', time: 'منذ ٣ ساعات', type: 'update' },
    ] as { actor: string; action: string; target: string; time: string; type: 'approve' | 'reject' | 'create' | 'update' }[],
  },

  en: {
    // TopNav
    ministry: 'Ministry of Interior',
    uae: 'United Arab Emirates',
    searchPlaceholder: 'Search services and reports...',
    notifications: 'Notifications',
    notif1: 'Licence request #4821 approved',
    notif1Time: '5 minutes ago',
    notif2: 'New request awaiting review',
    notif2Time: '23 minutes ago',
    notif3: 'Monthly performance report ready',
    notif3Time: '1 hour ago',
    userName: 'Mohammed Al Shamsi',
    userRole: 'System Administrator',
    userInitial: 'M',
    profileMenu: ['My Profile', 'Settings', 'Sign Out'],

    // Sidebar
    currentSection: 'Current Section',
    department: 'Civil Services Administration',
    mainMenu: 'Main Menu',
    navItems: [
      'Dashboard',
      'Government Services',
      'Requests',
      'Citizens',
      'Licences',
      'Reports & Statistics',
    ],
    support: 'Support & Help',
    settings: 'Settings',
    version: 'Version 2.4.1',
    language: 'Language',

    // Dashboard hero
    welcomeBack: 'Welcome back,',
    heroName: 'Mohammed Al Shamsi',
    heroSubtitle: 'Main Dashboard — Ministry of Interior, Civil Services Administration',
    heroDate: 'Sunday, 6 April 2026',
    newRequest: 'Create New Request',
    viewReports: 'View Reports',

    // Stat cards
    statCitizens: 'Registered Citizens',
    statServices: 'Active Services',
    statPending: 'Pending Requests',
    statCompleted: 'Completed Today',
    statCompletedChange: '91% completion',

    // Services section
    servicesTitle: 'Government Services',
    viewAllServices: 'View All Services',
    services: [
      {
        title: 'Residence & Visa Renewal',
        description: 'Renew residence permits and visas for UAE residents.',
      },
      {
        title: 'Commercial & Industrial Licences',
        description: 'Issue and renew trade licences for businesses and establishments.',
      },
      {
        title: 'Building & Property Permits',
        description: 'Process building permit applications and real estate projects.',
      },
      {
        title: 'Civil Records & Status',
        description: 'Extract birth and death certificates and national ID cards.',
      },
      {
        title: 'Healthcare Services',
        description: 'Register for government health programmes and health insurance.',
      },
      {
        title: 'Scholarships & Education',
        description: 'Apply for government grants and educational services.',
      },
    ],

    // Service card
    statusLabels: {
      active: 'Active',
      pending: 'Under Review',
      new: 'New',
    },
    requestsUnit: 'requests',
    viewDetails: 'View Details',

    // Table
    recentRequests: 'Recent Requests',
    viewAll: 'View All',
    colId: 'Request ID',
    colService: 'Service',
    colCitizen: 'Citizen',
    colDate: 'Date',
    colStatus: 'Status',
    view: 'View',
    tableStatusLabels: {
      approved: 'Approved',
      pending: 'Pending',
      rejected: 'Rejected',
      processing: 'Processing',
    },
    requests: [
      { id: '#8821', service: 'Residence Renewal', citizen: 'Ahmed Mohammed Al Hashmi', date: '6 April 2026', status: 'approved' },
      { id: '#8820', service: 'Trade Licence', citizen: 'Fatima Ali Al Zaabi', date: '6 April 2026', status: 'pending' },
      { id: '#8819', service: 'Birth Certificate', citizen: 'Khalid Saeed Al Mansouri', date: '5 April 2026', status: 'approved' },
      { id: '#8818', service: 'Building Permit', citizen: 'Mariam Hamad Al Kutbi', date: '5 April 2026', status: 'processing' },
      { id: '#8817', service: 'Passport', citizen: 'Salem Rashed Al Nuaimi', date: '4 April 2026', status: 'rejected' },
      { id: '#8816', service: 'National ID', citizen: 'Noura Saad Al Shamsi', date: '4 April 2026', status: 'approved' },
    ] as { id: string; service: string; citizen: string; date: string; status: 'approved' | 'pending' | 'rejected' | 'processing' }[],

    // Quick actions
    quickActionsTitle: 'Quick Actions',
    quickActions: [
      { label: 'New Request', description: 'Create a service request' },
      { label: 'Upload Document', description: 'Upload an official file' },
      { label: 'Export Report', description: 'Download PDF / Excel' },
      { label: 'Add User', description: 'Register a new staff member' },
    ],

    // Activity feed
    activityTitle: 'Activity Log',
    viewFullLog: 'View Full Log',
    activities: [
      { actor: 'Sara Al Falasi', action: 'approved request', target: 'Residence Renewal #8821', time: '8 minutes ago', type: 'approve' },
      { actor: 'Omar Al Balushi', action: 'created a new request', target: 'Trade Licence #8820', time: '22 minutes ago', type: 'create' },
      { actor: 'Layla Al Remaiti', action: 'updated data in', target: 'Citizen File #C-4451', time: '1 hour ago', type: 'update' },
      { actor: 'Hamad Al Suwaidi', action: 'rejected request', target: 'Building Permit #8817', time: '2 hours ago', type: 'reject' },
      { actor: 'System', action: 'sent an automated notification to', target: '34 citizens', time: '3 hours ago', type: 'update' },
    ] as { actor: string; action: string; target: string; time: string; type: 'approve' | 'reject' | 'create' | 'update' }[],
  },
}

export type Translations = typeof t.ar

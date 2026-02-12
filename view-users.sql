-- عرض جميع المستخدمين
SELECT 
    id,
    fullName as 'الاسم',
    phone as 'الهاتف',
    email as 'البريد',
    role as 'الدور',
    providerType as 'نوع المزود',
    isVerified as 'مفعل',
    isActive as 'نشط',
    createdAt as 'تاريخ التسجيل'
FROM "User"
ORDER BY createdAt DESC;

export default function ClientDashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '250px', background: '#f0f0f0', padding: '1rem' }}>
        <h2>لوحة مقدم الخدمة</h2>
        <ul>
          <li><a href="/client-dashboard">الرئيسية</a></li>
          <li><a href="/client-dashboard/orders">الطلبات</a></li>
          <li><a href="/client-dashboard/settings">الإعدادات</a></li>
        </ul>
      </aside>

      <main style={{ flexGrow: 1, padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}

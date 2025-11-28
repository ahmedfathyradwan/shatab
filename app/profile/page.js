'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');

      if (!userData || !userData.userType) {
        // لو المستخدم غير مسجل دخول
        router.push('/auth/login');
      } else if (userData.userType === 'client') {
        router.push('/profile/client');
      } else if (userData.userType === 'provider') {
        router.push('/profile/provider');
      }
    }
  }, [router]);

  return <p>جارٍ التوجيه إلى ملفك الشخصي...</p>;
};

export default ProfilePage;

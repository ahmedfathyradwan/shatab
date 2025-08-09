'use client';

import { useState } from 'react';
import styles from './dashboard.module.css';
import providerData from '../../mockData/clientRequests.js'; // Assuming this is the correct path to your mock data
import ProviderProfile from './ProviderProfile.jsx';
import AvailableRequests from './AvailableRequests.jsx';

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [provider, setProvider] = useState({ ...providerData[0] });

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'profile' ? styles.active : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          ملفي الشخصي
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'requests' ? styles.active : ''}`}
          onClick={() => setActiveTab('requests')}
        >
          الطلبات المتاحة
        </button>
      </div>

      {activeTab === 'profile' && (
        <ProviderProfile provider={provider} setProvider={setProvider} />
      )}

      {activeTab === 'requests' && (
        <div className={styles.placeholder}>
          <AvailableRequests />
        </div>
      )}
    </div>

  );
}

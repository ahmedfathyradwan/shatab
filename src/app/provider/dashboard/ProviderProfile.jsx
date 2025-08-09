'use client';

import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import governorates from '../../data/governorates.json';
import MySelect from '../../components/MySelect.jsx';

export default function ProviderProfile({ provider, setProvider }) {
  const [isEditing, setIsEditing] = useState(false);
  const [jobTitle, setJobTitle] = useState(null);
  const [governorate, setGovernorate] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const jobTitleOptions = jobTitles.map((item) => ({ label: item, value: item }));
  const governorateOptions = governorates.map((item) => ({ label: item, value: item }));

  useEffect(() => {
    setJobTitle({ label: provider.role, value: provider.role });
    setGovernorate({ label: provider.address, value: provider.address });
  }, [provider]);

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url));
    };
  }, [images]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProvider((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProvider((prev) => ({
      ...prev,
      role: jobTitle.value,
      address: governorate.value,
    }));
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newUrls = files.map((file) => {
      const url = URL.createObjectURL(file);
      return { url, file };
    });
    setImages((prev) => [...prev, ...newUrls]);
  };

  return (
    <div className={styles.profileSection}>
      <h2 className={styles.sectionTitle}>ملفي الشخصي</h2>

      <div className={styles.infoCard}>
        {isEditing ? (
          <>
            <div className={styles.formGroup}>
              <label className={styles.label}>الاسم</label>
              <input
                className={styles.editableInput}
                name="name"
                value={provider.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>المسمى الوظيفي</label>
              <MySelect
                key="edit-role"
                value={jobTitle}
                onChange={setJobTitle}
                options={jobTitleOptions}
                placeholder="المسمى الوظيفي"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>متوسط السعر اليومي</label>
              <input
                className={styles.editableInput}
                name="dailyPrice"
                value={provider.dailyPrice}
                onChange={handleChange}
                placeholder="مثال: 500"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>المحافظة</label>
              <MySelect
                key="edit-address"
                value={governorate}
                onChange={setGovernorate}
                options={governorateOptions}
                placeholder="اختيار المحافظة"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>رقم الهاتف</label>
              <input
                className={styles.editableInput}
                name="phone"
                value={provider.phone}
                onChange={handleChange}
                placeholder="مثال: 01012345678"
              />
            </div>
          </>
        ) : (
          <>
            <p className={styles.name}>م . {provider.name}</p>
            <p className={styles.role}>{provider.role}</p>
            <p>
              <span className={styles.label}>متوسط السعر اليومي :</span>
              <span className={styles.value}> {provider.dailyPrice} جنيه</span>
            </p>
            <p>
              <span className={styles.label}>العنوان :</span>
              <span className={styles.value}> {provider.address}</span>
            </p>
            <p>
              <span className={styles.label}>رقم الهاتف :</span>
              <span className={styles.value}> {provider.phone}</span>
            </p>
          </>
        )}

        <div className={styles.editToggleRow}>
          <button
            className={styles.toggleBtn}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? 'حفظ' : 'تعديل بياناتي'}
          </button>

          <button
            className={styles.logoutBtn}
            onClick={() => setConfirmLogout(true)}
          >
            تسجيل خروج
          </button>

          <button
            className={styles.deleteBtn}
            onClick={() => setConfirmDelete(true)}
          >
            حذف حسابي
          </button>
        </div>
      </div>

      <h3 className={styles.sectionSubtitle}>بعض أعمالي السابقة</h3>

      <label className={styles.uploadLabel}>
        إضافة صور
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      </label>

      {images.length === 0 ? (
        <div className={styles.instructions}>
          قم بإضافة بعض من صور أعمالك السابقة هنا لعرضها في ملفك الشخصي.
        </div>
      ) : (
        <div className={styles.imageGrid}>
          {images.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={img.url}
                alt={`عمل ${index + 1}`}
                className={styles.thumb}
                onClick={() => setSelectedImage(img.url)}
              />
              <button
                className={styles.imageDeleteBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setImageToDelete({ img, index });
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div className={styles.overlay} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="عرض كبير" className={styles.fullImage} />
        </div>
      )}

      {imageToDelete && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmModal}>
            <p>هل أنت متأكد أنك تريد حذف هذه الصورة؟</p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmDelete}
                onClick={() => {
                  URL.revokeObjectURL(imageToDelete.img.url);
                  setImages(images.filter((_, i) => i !== imageToDelete.index));
                  setImageToDelete(null);
                }}
              >
                حذف
              </button>
              <button
                className={styles.cancelDelete}
                onClick={() => setImageToDelete(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmLogout && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmModal}>
            <p>هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmDelete}
                onClick={() => {
                  console.log('تم تسجيل الخروج');
                  setConfirmLogout(false);
                }}
              >
                تأكيد
              </button>
              <button
                className={styles.cancelDelete}
                onClick={() => setConfirmLogout(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmModal}>
            <p>هل أنت متأكد أنك تريد حذف حسابك؟</p>
            <div className={styles.confirmActions}>
              <button
                className={styles.confirmDelete}
                onClick={() => {
                  console.log('تم حذف الحساب');
                  setConfirmDelete(false);
                }}
              >
                حذف
              </button>
              <button
                className={styles.cancelDelete}
                onClick={() => setConfirmDelete(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

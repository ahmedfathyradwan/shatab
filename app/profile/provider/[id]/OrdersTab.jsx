"use client";
import styles from "./OrdersTab.module.css";
import requests from "../../../mockData/requests";
import { useRouter } from "next/navigation";

export default function OrdersTab() {
  const router = useRouter();

  return (
    <div className={styles.ordersContainer}>
      {requests.map((req) => (
        <div key={req.id} className={styles.orderCard}>
          <img
            src={req.image}
            alt={req.serviceType}
            className={styles.orderImage}
          />

          <div className={styles.orderInfo}>
            <h3 className={styles.orderTitle}>{req.serviceType}</h3>
            <p className={styles.orderDetails}>
              <strong>النوع:</strong> {req.providerType}
            </p>
            <p className={styles.orderDetails}>
              <strong>المساحة:</strong> {req.area} م²
            </p>
            <p className={styles.orderDetails}>
              <strong>العنوان:</strong> {req.address}
            </p>
            <p className={styles.orderDescription}>{req.description}</p>
            <p className={styles.orderDate}>
              <strong>التاريخ:</strong> {req.date}
            </p>

            {/* 🔹 زر تقديم عرض */}
            <button
              className={styles.offerButton}
              onClick={() => router.push(`/profile/provider/offer?id=${req.id}`)}
            >
              تقديم عرض
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

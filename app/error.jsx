'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="cont">
        <p className="tit">
            حدث خطأ أثناء تحميل الصفحة.
        </p>
      <br />
      <button
        onClick={() => reset()}
         className="btn"
      >
        إعادة المحاولة
      </button>
    </div>
  );
}

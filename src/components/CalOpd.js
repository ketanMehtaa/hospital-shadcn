'use client';
/* First make sure that you have installed the package */
/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'opd' });
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <Cal
      namespace="opd"
      calLink="sharda.ent/opd"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}

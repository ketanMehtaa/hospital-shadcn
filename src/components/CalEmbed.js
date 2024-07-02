'use client';
// components/CalEmbed.js
import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        styles: { branding: { brandColor: '#7e3333' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Cal
      calLink="ketanmehta/appointment"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
};

export default CalEmbed;

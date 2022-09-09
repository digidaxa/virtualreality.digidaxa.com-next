import React from 'react';

import ClientHeader from './ClientHeader';
import ClientBody from './ClientBody';

export default function Client() {
  return (
    <section id="clients" className="py-28 bg-[#17C3B2] dark:bg-[#0e8579]">
      <div className="container">
        <div className="w-full px-4">
          <ClientHeader />
          <ClientBody />
        </div>
      </div>
    </section>
  );
}

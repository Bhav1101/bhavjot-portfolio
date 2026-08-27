import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;

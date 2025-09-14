import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#242827] text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto w-full max-w-screen-xl p-6 bg-[#fcfcfc] text-black">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

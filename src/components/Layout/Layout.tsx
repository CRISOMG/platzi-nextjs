import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="">
    <Header />
    <main className="mx-auto my-4 px-2 max-w-3xl">{children}</main>
    <Footer />
  </div>
);

export default Layout;

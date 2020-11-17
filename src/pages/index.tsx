import React, { useState, useEffect } from 'react';
import Layout from 'src/components/Layout/Layout';
import KawaiiHeader from 'src/components/KawaiiHeader/KawaiiHeader';
import ProductList from 'src/components/ProductList/ProductList';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/avo');
  const { data }: TAPIAvoResponse = await res.json();

  return {
    props: {
      productList: data,
    },
  };
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;

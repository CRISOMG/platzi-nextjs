import React, { useState, useEffect } from 'react';
import Layout from 'src/components/Layout/Layout';
import KawaiiHeader from 'src/components/KawaiiHeader/KawaiiHeader';
import ProductList from 'src/components/ProductList/ProductList';

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
      });
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;

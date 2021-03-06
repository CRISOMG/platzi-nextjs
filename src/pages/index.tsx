import React from 'react';
import Layout from 'src/components/Layout/Layout';
import KawaiiHeader from 'src/components/KawaiiHeader/KawaiiHeader';
import ProductList from 'src/components/ProductList/ProductList';

import config from 'config';

export async function getStaticProps() {
  const res = await fetch(`${config.apiHost}/api/avo`);
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

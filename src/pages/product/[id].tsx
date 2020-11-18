import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from 'src/components/Layout/Layout';
import ProductSummary from 'src/components/ProductSummary/ProductSummary';

import config from 'config';
import { GetStaticPaths, GetStaticPropsContext } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${config.apiHost}/api/avo`);
  const { data: products }: { data: TProduct[] } = await res.json();

  const paths = products.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;
  const res = await fetch(`${config.apiHost}/api/avo/${id}`);
  const product: TProduct = await res.json();

  return {
    props: {
      product,
    },
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;

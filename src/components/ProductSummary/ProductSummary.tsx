import React from 'react';

import AddToCart from './AddToCart';
import ProductAttributes from './ProductAttributes';

type ProductSummaryProps = {
  product: TProduct;
};

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
    <section>
      <div className="flex flex-col items-center sm:flex-row">
        <div>
          <img
            width="300"
            height="300"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="pl-6">
          <h1 className="font-bold text-xl">{product.name}</h1>
          <div className="my-2">
            <p className="mb-2">{product.price}</p>
            <span className="text-xs text-blue-800 rounded p-2 bg-gray-400">{`SKU: ${product.sku}`}</span>
          </div>
          <div className="mt-3">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </section>
    <ProductAttributes {...product.attributes} />
  </>
);

export default ProductSummary;

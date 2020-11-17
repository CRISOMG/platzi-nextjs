import React from 'react';
import Link from 'next/link';

type ProductListProps = {
  products: TProduct[];
};

const ProductList = ({ products }: ProductListProps) => (
  <section className="grid grid-cols-1 px-2 sm:grid-cols-2 gap-4">
    {products.map(({ name, id, price, image }) => (
      <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
        <a>
          <article className="inline-block border-2 h-auto rounded w-full ">
            <div className="border-b ">
              <img
                width="340"
                height="340"
                src={image}
                alt={`avo - ${name}`}
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-2xl">{name}</h2>
              <span className="text-green-400">{`$${price}`}</span>
            </div>
          </article>
        </a>
      </Link>
    ))}
  </section>
);

export default ProductList;

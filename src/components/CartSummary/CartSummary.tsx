import React from 'react';

type CartSummaryProps = {
  totalAmount: number;
};

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <section className="flex justify-between items-center border-2 p-4 rounded shadow">
      <span>
        <strong>Sub total:</strong>
        {` ${totalAmount}`}
      </span>
      <button className="py-2 px-4 rounded bg-black text-white focus:outline-none focus:shadow-outline focus:border-blue-300">
        Check out
      </button>
    </section>
  );
};

export default CartSummary;

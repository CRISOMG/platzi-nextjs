import React from 'react';
import Layout from 'src/components/Layout/Layout';
import CartItemList from 'src/components/CartItemList/CartItemList';
import CartSummary from 'src/components/CartSummary/CartSummary';
import { useCart, useCartMutations } from 'src/store/Cart';

const CartPage = () => {
  const { items, count } = useCart();
  const { removeFromCart } = useCartMutations();

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <CartSummary totalAmount={count} />
    </Layout>
  );
};

export default CartPage;

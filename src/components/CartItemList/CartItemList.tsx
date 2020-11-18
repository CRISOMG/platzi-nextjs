import React from 'react';
import Link from 'next/link';
import { CartItemType } from 'src/store/Cart';

type CartItemListProps = {
  items: CartItemType[];
  removeFromCart: (product: TProduct) => void;
  loading?: boolean;
};

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  // if (loading) return <Loader active inline="centered" />;

  if (items.length === 0)
    return (
      <>
        <section className="bg-orange-100 border-2 border-orange-400 px-4 py-2 rounded">
          <h2 className="text-xl text-yellow-700">Your cart is empty</h2>
          <p className=" text-yellow-700">
            You will need to add some items to the cart before you can checkout.
          </p>
        </section>
        <hr className="my-4" />
      </>
    );

  return (
    <section>
      {items.map((cartItem) => {
        const { id, name, quantity, price, image } = cartItem;

        return (
          <>
            <article className="flex flex-col mb-3 relative sm:flex-row">
              <div className="">
                <img width="150px" src={image} alt={name} />
              </div>
              <div className="pt-5">
                <Link href="/product/[id]" as={`/product/${id}/`} passHref>
                  <a className="text-xl font-bold hover:text-blue-600">
                    {name}
                  </a>
                </Link>
                <p className="py-2 text-gray-600">{`${quantity} x $${price}`}</p>

                <p className="font-sans sm:w-full w-2/3">
                  Some more information goes
                  <span className="text-blue-400">
                    <Link href="/product/[id]" as={`/product/${id}/`} passHref>
                      <a> here...</a>
                    </Link>
                  </span>
                </p>
              </div>
              <button
                className="absolute right-0 bottom-0 mb-3 border rounded px-3 py-1 bg-gray-400 text-gray-700 z-10"
                onClick={() => removeFromCart(cartItem)}
              >
                X
              </button>
            </article>
            <hr className="my-4" />
          </>
        );
      })}
    </section>
  );
};

export default CartItemList;

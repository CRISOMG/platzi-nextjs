import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Avocado } from 'src/components/SVGIcons';
import ShoppingCartIcon from './ShoppingCartIcon';
import { useCart } from 'src/store/Cart';

interface IPageIndicatorArrow {
  listOfRefs: React.RefObject<HTMLDivElement>[];
  pathname: string;
}

const Header = () => {
  const { pathname } = useRouter();
  const { count: cartCount } = useCart();

  const $avoRef = useRef(null);
  const $cartRef = useRef(null);

  useEffect(() => {
    pageIndicatorArrow({ listOfRefs: [$avoRef, $cartRef], pathname });
  }, [pathname]);

  function pageIndicatorArrow({ listOfRefs, pathname }: IPageIndicatorArrow) {
    listOfRefs.forEach(({ current: el }) => {
      if (el !== null) {
        const a = el.children[0] as HTMLAnchorElement;
        if (a.pathname === pathname) {
          el.setAttribute('active', '');
        }
      }
    });
  }

  return (
    <header className="shadow">
      <div className="flex justify-between mx-auto max-w-3xl">
        <div className="hover:bg-gray-200" ref={$avoRef}>
          <Link href="/" passHref>
            <a className="flex items-center px-5 py-3">
              <Avocado />
              Avo Store
            </a>
          </Link>
        </div>
        <div className="hover:bg-gray-200" ref={$cartRef}>
          <Link href="/cart" passHref>
            <a className="block px-5 py-3">
              <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
            </a>
          </Link>
        </div>
        <style jsx>{`
          div[active] {
            position: relative;
            background-color: #e2e8f0;
          }
          div[active]::before {
            content: '';
            border: 2px solid #e1e1e1;
            border-top: none;
            border-left: none;
            width: 12px;
            height: 12px;
            position: absolute;
            bottom: -6px;
            left: calc(100% - 50% - 2px);
            transform: rotate(45deg);
            background-color: inherit;
          }
        `}</style>
      </div>
    </header>
  );
};

export default Header;

import { AppProps } from 'next/app';
import '../../tailwind.css';
// import '../../styles.tailwind.css'
import '../../global.css';

import CartProvider from 'src/store/Cart';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;

import { useRouter } from 'next/router';
import { CartProvider } from "react-use-cart";
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;
  return <CartProvider>
    {showHeader && <Header />}
    <Component {...pageProps} />
    {showHeader && <Footer />}
    
  </CartProvider>
}

export default MyApp

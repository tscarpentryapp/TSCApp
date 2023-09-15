import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
// import UserProvider from './UserProvider';

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <UserProvider> */}
      <Component {...pageProps} />
      <Analytics /> 
    {/* </UserProvider> */}
    </>
  )
}

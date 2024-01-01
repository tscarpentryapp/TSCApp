import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { AnalyticsWeAreVelier } from './components/AnalyticsWeAreVelier';
// import UserProvider from './UserProvider';

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <UserProvider> */}
      <AnalyticsWeAreVelier>
        <Component {...pageProps} />
      </AnalyticsWeAreVelier>
      <Analytics /> 
    {/* </UserProvider> */}
    </>
  )
}

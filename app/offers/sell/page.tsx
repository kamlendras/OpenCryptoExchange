import Sell from "../../components/offers/sell"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SELL MONERO',
  description: 'Open Source Crypto Exchange Platform with Zero Transaction Fees.',
}
export default function C() {
  return (
    <>
        
<Sell/>


    

    </>
  );
}
import SignUp from "../components/signup/page";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SignUp',
  description: 'Open Source Crypto Exchange Platform with Zero Transaction Fees.',
}
export default function C() {
  return (
    <>
      <SignUp />
    </>
  );
}
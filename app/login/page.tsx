import Login from "../components/login/page";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'LogIn',
  description: 'Open Source Crypto Exchange Platform with Zero Transaction Fees.',
}
export default function C() {
  return (
    <>
      <Login />
    </>
  );
}
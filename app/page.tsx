import Grid from "./components/grid";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Open Crypto Exchange',
  description: 'Open Source Crypto Exchange Platform with Zero Transaction Fees.',
}

export default function C() {
  return (
    <>
      <Grid />
    </>
  );
}

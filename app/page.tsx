
import Grid from '@mui/joy/Grid';
import Tabs from "./components/Tabs"
// import Footer from "./components/Footer"
export const metadata = {
  title: "Open Crypto Exchange",
  description: "Open Source Crypto Exchange Platform with Zero Transaction Fees.",
};
export default function C() {
  return (
    <>
          {/* <Grid 
          container
          spacing={2} 
         
           sx={{ flexGrow: 1, mt:1 }}
          >
      <Grid disableEqualOverflow xs={9}>
      
      </Grid>
      <Grid disableEqualOverflow  xs={3}>
      
      
      </Grid>

    </Grid> */}
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
      <Tabs/>
      </Grid>

    </>
  );
}
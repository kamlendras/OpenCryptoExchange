"use client"
import Grid from '@mui/joy/Grid';
import Tabs from "./Tabs"
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import framesxTheme from './theme';
import Intropage from "./intropage"
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import FAQ from "./FAQ"
import Footer from './footer';
import Features from './features'
import Testimonials from './Testimonials';
import Highlights from './Highlights';
export default function C() {

  return (
    <>
   





<CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
     
        <Intropage />
        <div id="exchange">
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
      </div>
      <div id="features">
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
     < Features/>
     </Grid>
      </div>

      <div id="Testimonials">
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
     <Testimonials/>
     </Grid>
      </div>
      <div id="Highlights">
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
     < Highlights/>
     </Grid>
      </div>

      <div id="FAQ">
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
      <FAQ/>
      </Grid>
      </div>
      
      {/* <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
> */}

    
      {/* </Grid> */}
<Footer/>
      </Box>
    </CssVarsProvider>



    

    </>
  );
}
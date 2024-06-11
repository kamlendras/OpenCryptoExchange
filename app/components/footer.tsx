"use client"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Grid from '@mui/joy/Grid';
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
const items = [
  {imageLight1: 'url("/icon.svg")',
    imageDark1: 'url("/icon_black.svg")',
  },
];

const items2 = [
  {
    imageLight2: 'url("/github.png")',
    imageDark2: 'url("/github_black.png")',
  },
];
const items3 = [
  
  {
    imageLight3: 'url("/matrix.svg")',
    imageDark3: 'url("/matrix_black.svg")',
  },
  
];
const items4 = [{
    imageLight4: 'url("/masstodon.svg")',
    imageDark4: 'url("/masstodon_black.svg")',
  },
];






const Footer = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };
// 
const [selectedItemIndex2, setSelectedItemIndex2] = React.useState(0);

const handleItemClick2 = (index: number) => {
  setSelectedItemIndex(index);
};
// 
// 
const [selectedItemIndex3, setSelectedItemIndex3] = React.useState(0);

const handleItemClick3 = (index: number) => {
  setSelectedItemIndex(index);
};
// 
// 
const [selectedItemIndex4, setSelectedItemIndex4] = React.useState(0);

const handleItemClick4 = (index: number) => {
  setSelectedItemIndex(index);
};
// 


// 
  const selectedFeature = items[selectedItemIndex];
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  return (
    <>
    <Grid container spacing={0}>
    <Grid  sm={12} md={4} lg={2} xl={2} paddingLeft={5}>
      <Stack spacing={2}>
        {/* <img src="/icon.svg"  width={169} height={67.6}/> */}

        <Box
              sx={{
                // m: 'auto',
                // mt:5,
                width: 100,
                height: 100,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight1
                    : items[selectedItemIndex].imageDark1,
              }}
            />

        <Typography level="title-lg">
         OPEN CRYPTO<br/> EXCHANGE
        </Typography>

       
        </Stack>
      </Grid>
      <Grid sm={6} md={4} lg={2} xl={2} padding={5} >
      <Stack spacing={2}>
      <Typography level="title-lg">
        ABOUT
        </Typography>

        <Link
          href="https://github.com/universal-org/OpenCryptoExchange"
         
        >
          About
        </Link>
        <Link href="https://github.com/universal-org/OpenCryptoExchange">Careers</Link>
        <Link href="https://github.com/universal-org/OpenCryptoExchange">Contact us</Link>
       
        <Link href="https://github.com/universal-org/OpenCryptoExchange">Referral program</Link>
        <Link href="https://github.com/universal-org/OpenCryptoExchange">Bounty program</Link>
        </Stack>
      </Grid>
      <Grid  sm={6} md={4} lg={2} xl={2} padding={5}>
      <Stack spacing={2}>
      <Typography level="title-lg">
          LEGAL
        </Typography>
        <Link href="https://github.com/universal-org/OpenCryptoExchange">Tearms of Service</Link>
        <Link href="https://github.com/universal-org/OpenCryptoExchange">Terms and Conditions</Link>
        <Link href="/help">Privacy Policy</Link>
        </Stack>
      </Grid>

      <Grid  sm={6} md={4} lg={2} xl={2} padding={5}>
      <Stack spacing={2}>
      <Typography level="title-lg">
          HELP
        </Typography>
        <Link href="https://github.com/universal-org/OpenCryptoExchange">FAQ / Help</Link>
        <Link href="https://github.com/universal-org/OpenCryptoExchange">TESTNET</Link>

        </Stack>
      </Grid>
      <Grid  sm={6} md={4} lg={2} xl={2} padding={5}>
      <Stack spacing={2}>
      <Typography level="title-lg">
          PRODUCTS
        </Typography>
        <Link href="https://github.com/universal-org/blo9">blo9</Link>
        <Link href="https://github.com/universal-org/fosstube">fosstube</Link>
        <Link href="https://github.com/universal-org/ueats-web">ueats</Link>
        </Stack>
      </Grid>

      <Grid  sm={6} md={4} lg={2} xl={2} padding={5}>
      <Stack spacing={2}>
      
      <Typography level="title-lg">
          FOLLOW US
          
        </Typography>
        <a href="https://github.com/universal-org">
        <Box
              sx={{
                // m: 'auto',
                // mt:5,
                width: 200,
                height: 80,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items2[selectedItemIndex2].imageLight2
                    : items2[selectedItemIndex2].imageDark2,
              }}
            /></a>
             <a href="https://matrix.to/#/#Universaldev:matrix.org">
            <Box
              sx={{
                // m: 'auto',
                // mt:5,
                width: 90,
                height: 40,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items3[selectedItemIndex4].imageLight3
                    : items3[selectedItemIndex4].imageDark3,
              }}
            /></a><a href="https://fosstodon.org/@universal">
           <Box
              sx={{
                // m: 'auto',
                // mt:5,
                width: 155,
                height: 40,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items4[selectedItemIndex4].imageLight4
                    : items4[selectedItemIndex4].imageDark4,
              }}
            />
        </a>
        
        
        </Stack>
      </Grid>
    </Grid>
    <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              GPL-3.0 LICENSED | Open Crypto Exchange | {new Date().getFullYear()}
            </Typography>
          </Box>
    </>
  );
};
export default Footer;
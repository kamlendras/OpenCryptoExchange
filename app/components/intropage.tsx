"use client";
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Star from '@mui/icons-material/Star';
import TwoSidedLayout from './TwoSidedLayout';
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function HeroLeft08() {
  const [num, setNum] = React.useState(331231);
  const [num1, setNum1] = React.useState(4.9);
  return (
    <>
   

  
    <TwoSidedLayout>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        OPEN SOURCE P2P XMR TRADING PLATFORM
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
      Non-custodial Monero trading solution, we don’t hold your funds.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          my: 2,
          '& > *': { flex: 'auto' },
        }}
      >
         <Link href="#FAQ">
        <Button size="lg" variant="outlined" color="neutral">
          Learn More
        </Button>
        </Link>
        <Link href="#exchange">
        <Button size="lg" endDecorator={<ArrowForward />}>
          Get Started
        </Button>
        </Link>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          columnGap: 4.5,
          rowGap: 1.5,
          textAlign: 'center',
          alignSelf: 'stretch',
          '& > *': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            alignItems: 'center',
          },
          [theme.breakpoints.up(834)]: {
            textAlign: 'left',
            '& > *': {
              alignItems: 'initial',
            },
          },
        })}
      >
        <div>
          <Typography
            fontSize="xl4"
            fontWeight="lg"
            endDecorator={<Star  sx={{ color: 'warning.300' }} />}
          >
            {/* 4.9 */}
            <div className="container">
      <AnimatedNumbers
        includeComma
        // className={styles.container}
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.1,
        })}
        animateToNumber={num1}
        // fontStyle={{
        //   fontSize: 40,
        //   color: "red",
        // }}
      />
   
    </div>
          </Typography>
          <Typography textColor="text.secondary">
            Rated by <b>5k</b> people on Github.com
          </Typography>
        </div>
        <div>
          <Typography fontSize="xl4" fontWeight="lg"
          endDecorator={<AddIcon  style={{ fill: '#000000' }} />}>
            {/* 9.5k+ */}
            <div className="container">
      <AnimatedNumbers
        includeComma
        // className={styles.container}
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={num}
        // fontStyle={{
        //   fontSize: 40,
        //   color: "red",
        // }}
      />
   
    </div>
          </Typography>
          <Typography textColor="text.secondary">
            Active users from all around the world.
          </Typography>
        </div>
      </Box>
      {/* <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        HeroLeft08
      </Typography> */}
    </TwoSidedLayout>
    </>
  );
}

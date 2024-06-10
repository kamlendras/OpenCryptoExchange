import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Container from '@mui/joy/Container';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import SecurityIcon from '@mui/icons-material/Security';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GitHubIcon from '@mui/icons-material/GitHub';
import Diversity3Icon from '@mui/icons-material/Diversity3';
const items = [
  {
    icon: <SecurityIcon />,
    title: 'SECURE',
    description:
      'Multisig (P2SH) contracts.',
  },
  {
    icon: <KeyIcon />,
    title: 'NON-CUSTODIAL',
    description:
      'You control the keys to the funds in escrow.',
  },
  {
    icon: <VisibilityOffIcon />,
    title: 'ANONYMOUS',
    description:
      'No verification required.',
  },
  {
    icon: <Diversity3Icon />,
    title: 'DECENTRALIZED ',
    description:
      'No single entity controls Open Crypto Exchange.',
  },
  {
    icon: <GppGoodIcon />,
    title: 'SECURED BY ESCROW',
    description:
      'Control the keys to the funds in escrow through out the whole deal.',
  },
  {
    icon: <GitHubIcon />,
    title: 'OPEN SOURCE',
    description:
      'Open Crypto Exchange is an Free and Open Source Software Licenced under GPL-3.0.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        // bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography level="body-lg">
          OPEN CRYPTO EXCHANGE. AN OPEN SOURCE DECENTRALIZED MONERO TRADING PLATFORM.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid  xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                // color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={(theme) => ({

                  p: 3,
                  height: '100%',
                  // border: '1px solid',
                  // borderColor: 'grey.800',
                  // background: 'transparent',
                  // backgroundColor: 'grey.900',
                  // width: 300,
                  gridColumn: 'span 2',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  resize: 'horizontal',
                  overflow: 'hidden',
                  gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
                  transition: 'transform 0.3s, border 0.3s',
                  '&:hover': {
                    borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                    transform: 'translateY(-2px)',
                  },
                  '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
                })}
              >
                <Box 
                // sx={{ opacity: '50%' }}
                >
                  {item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography level="body-md" 
                  // sx={{ color: 'grey.400' }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
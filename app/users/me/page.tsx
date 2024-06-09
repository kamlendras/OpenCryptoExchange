import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from '../../components/users/SideBar';
// import Header from './components/Header';
import MyProfile from '../../components/users/account';
export const metadata = {
    title: "Account",
    description: "Open Source Crypto Exchange Platform with Zero Transaction Fees.",
  };
export default function JoyOrderDashboardTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box 
      sx={{ display: 'flex',
        //  minHeight: '100dvh' 
        }}
      >
         <Sidebar />
        {/*<Header /> */}
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow: 'auto',
          }}
        >
          <MyProfile />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
"use client"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import TabsForm from "./TabsForm"
import TabsForm2 from "./TabsForm2"
export default function TabsPricingExample() {
  return (
    <Tabs
      variant="soft"
     
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
        width: 750,
        borderRadius: 'lg',
        boxShadow: 'xl',
        overflow: 'auto',
      }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: 'sm',
            fontWeight: 'lg',
            [`&[aria-selected="true"]`]: {
              color: 'primary.500',
              bgcolor: 'background.surface',
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: '-4px',
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Buy BTC
        </Tab>
        {/* <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Pro
        </Tab> */}
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Sell BTC
        </Tab>
      </TabList>
      <TabPanel value={0}>
        {/* <Typography level="inherit">
          Get started with the industry-standard React UI library, MIT-licensed.
        </Typography>
        <Typography textColor="success.400" fontSize="xl3" fontWeight="xl" mt={1}>
          $0{' '}
          <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
            － Free forever
          </Typography>
        </Typography> */}
        <TabsForm/>
      </TabPanel>
      <TabPanel value={1}>
      <TabsForm2/>
      </TabPanel>
      
    </Tabs>
  );
}

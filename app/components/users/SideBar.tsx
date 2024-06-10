"use client"
import * as React from 'react';
import Chip from '@mui/joy/Chip';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Sheet from '@mui/joy/Sheet';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function Navigation() {
  return (
    <Sheet
    className="Sidebar"
    sx={{
      position: { xs: 'fixed', md: 'sticky' },
      transform: {
        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
        md: 'none',
      },
      transition: 'transform 0.4s, width 0.4s',
      // zIndex: 10000,
      mt:5,
      // height: '100dvh',
      width: 'var(--Sidebar-width)',
      top: 0,
      p: 2,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      // borderRight: '1px solid',
      borderColor: 'divider',
    }}
  >
    <GlobalStyles
      styles={(theme) => ({
        ':root': {
          '--Sidebar-width': '220px',
          [theme.breakpoints.up('lg')]: {
            '--Sidebar-width': '240px',
          },
        },
      })}
    />
    <Box
      className="Sidebar-overlay"
      sx={{
        position: 'fixed',
        zIndex: 9998,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        opacity: 'var(--SideNavigation-slideIn)',
        backgroundColor: 'var(--joy-palette-background-backdrop)',
        transition: 'opacity 0.4s',
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
          lg: 'translateX(-100%)',
        },
      }}
      onClick={() => closeSidebar()}
    />
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
    </Box>
    <Box
      sx={{
        minHeight: 0,
        overflow: 'hidden auto',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        [`& .${listItemButtonClasses.root}`]: {
          gap: 1.5,
        },
      }}
    >






    <List
      size="sm"
      sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}
    >
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
          Browse
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          <ListItem>
            <ListItemButton selected>
              <ListItemDecorator>
                <AccountCircleIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Account</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <NotificationsActiveIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Notifications</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <HistoryIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>History</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <SettingsIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <CampaignIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Broadcast</ListItemContent>
              <Chip variant="soft" color="warning" size="sm">
                2
              </Chip>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
      </Box>
      
    </Sheet>
  );
}
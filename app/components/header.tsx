"use client"
import * as React from 'react';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Filters from "./filters"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import { useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Search from "./search"
import ColorSchemeToggle from './ColorSchemeToggle';
import Link from 'next/link'
import Alert from '@mui/joy/Alert';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { VariantProp } from '@mui/joy/styles';
const items = [
  {imageLight: 'url("/icon.svg")',
    imageDark: 'url("/icon_black.svg")',
  },
]
// import Navigation from './Navigation';

// function ColorSchemeToggle() {
//   // const { mode, setMode } = useColorScheme();
//   const [mounted, setMounted] = React.useState(false);
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (!mounted) {
//     return <IconButton size="sm" variant="outlined" color="primary" />;
//   }
//   return (
//     <Tooltip title="Change theme" variant="outlined">
//       <IconButton
//         id="toggle-mode"
//         size="sm"
//         variant="plain"
//         color="neutral"
//         sx={{ alignSelf: 'center' }}
//         onClick={() => {
//           if (mode === 'light') {
//             setMode('dark');
//           } else {
//             setMode('light');
//           }
//         }}
//       >
//         {/* {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />} */}
//       </IconButton>
//     </Tooltip>
//   );
// }

export default function Header() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  return (
    <Box
    style={{position: 'fixed' ,}}
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        zIndex: 1300,
      
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        {/* <IconButton
          size="md"
          variant="outlined"
          color="neutral"
          sx={{
            display: { xs: 'none', sm: 'inline-flex' },
            borderRadius: '50%',
          }}
        > */}
        <div style={{display:"flex"}}>
        <Link href="/">
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
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            />
       
       
       
       </Link>
       {/* <Typography level="h4" noWrap>OPEN CRYPTO EXCHANGE</Typography> */}
      
       </div> 
       <Button variant="plain" size="md">Sell XMR</Button>
        <Button variant="plain" size="md">Buy XMR</Button> {/* </IconButton> */}
        {/* <Button
          variant="plain"
          color="neutral"
          aria-pressed="true"
          component="a"
          href="/joy-ui/getting-started/templates/email/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          Email
        </Button>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/joy-ui/getting-started/templates/team/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          Team
        </Button>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/joy-ui/getting-started/templates/files/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          Files
        </Button>*/}
      </Stack> 
      {/* <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle>Blo9</DialogTitle>
          <Box sx={{ px: 1 }}>
            <Navigation />
          </Box>
        </Drawer>
      </Box> */}

      <Box
        style={{position: 'fixed' ,right:20,top:10,}}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        

        }}
      >
        {/* <Search/> */}
        {/* <Filters /> */}
        <ColorSchemeToggle />
        <Button variant="outlined" size="md">Log in</Button>
        <Button size="md">Sign up</Button>
        
          {/* <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            component="a"
            href="/write"
            sx={{ alignSelf: 'center' }}
          >

            < DrawOutlinedIcon/> Write
          </IconButton> */}
        
        
          {/* <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            component="a"
            href="/blog/first-look-at-joy/"
            sx={{ alignSelf: 'center' }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton> */}
       
        
        {/* <Dropdown>
          <MenuButton
            variant="plain"
            size="sm"
            sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
          >
            <Avatar
              src="https://i.pravatar.cc/40?img=2"
              srcSet="https://i.pravatar.cc/80?img=2"
              sx={{ maxWidth: '32px', maxHeight: '32px' }}
            />
          </MenuButton>
          <Menu
            placement="bottom-end"
            size="xs"
            sx={{
              zIndex: '99999',
              p: 1,
              gap: 1,
              '--ListItem-radius': 'var(--joy-radius-sm)',
            }}
          >
            {/* <MenuItem>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/40?img=2"
                  srcSet="https://i.pravatar.cc/80?img=2"
                  sx={{ borderRadius: '50%' }}
                />
                <Box sx={{ ml: 1.5 }}>
                  <Typography level="title-sm" textColor="text.primary">
                    Rick Sanchez
                  </Typography>
                  <Typography level="body-xs" textColor="text.tertiary">
                    rick@email.com
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <ListDivider /> 
            <MenuItem>
              <Person2OutlinedIcon />
              Profile
            </MenuItem>
            <MenuItem>
              <BookmarksOutlinedIcon />
              Library
            </MenuItem>
            <MenuItem>
              <ArticleOutlinedIcon />
              Stories
            </MenuItem>
            <MenuItem>
              <SignalCellularAltOutlinedIcon />
              Stats
            </MenuItem>





            <ListDivider />
            <MenuItem component="a" href="/blog/first-look-at-joy/">
         Settings
             
            </MenuItem>
            <MenuItem
              component="a"
              href="https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/email"
            >
             Refine recommendations
          
            </MenuItem>
        
            <MenuItem>
         Manage publications
            </MenuItem>
            <MenuItem>
         Help
            </MenuItem>
            <ListDivider />
            <MenuItem>
            Become a Medium member
            </MenuItem>
            <MenuItem>
            Create a Mastodon account
        </MenuItem>
        <MenuItem>
        Apply for author verification
        </MenuItem>
        <MenuItem>
        Apply to the Partner Program
        </MenuItem>
        <MenuItem>
        Gift a membership
        </MenuItem>

        <ListDivider />
        <MenuItem>
        Sign out <br/>
        ka••••••••@gmail.com
        </MenuItem>


          </Menu>
        </Dropdown> */}
      </Box>
{/* 
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
    <Alert sx={{mt:10}} variant="solid" color="primary" >
          Primary
        </Alert>
        </Box> */}

    </Box>
  );
}
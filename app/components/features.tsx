"use client"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Container from '@mui/joy/Container';
import Grid from '@mui/joy/Grid';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import getLPTheme from './getLPTheme';
import { PaletteMode } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const items = [
  {
    icon: <SecurityOutlinedIcon/>,
    title: 'Security',
    description:
      'Users must be able to trust Open Crypto Exchange with their transactions, without risk of error or attack. ',
    imageLight: 'url("https://etimg.etb2bimg.com/photo/104637257.cms")',
    imageDark: 'url("https://etimg.etb2bimg.com/photo/104637257.cms")',
  },
  {
    icon: <LockOutlinedIcon />,
    title: 'Privacy',
    description:
      'Open Crypto Exchange takes privacy seriously. This level of privacy must be completely accessible to all users. ',
    imageLight: 'url("https://cryptoslate.com/wp-content/uploads/2024/04/monero-privacy-768x403.jpg")',
    imageDark: 'url("https://cryptoslate.com/wp-content/uploads/2024/04/monero-privacy-768x403.jpg")',
  },
  {
    icon: <PublicOutlinedIcon />,
    title: 'Decentralization',
    description:
      'Open Crypto Exchange is committed to providing the highest degree of decentralization in both network security and code development. ',
    imageLight: 'url("https://media.licdn.com/dms/image/C5612AQHJ1A6uNz1Syw/article-cover_image-shrink_720_1280/0/1534935247774?e=2147483647&v=beta&t=ZqrgryboEliGFPYFRWz287lJ6-Gfe6eXrHAx7IlRKco")',
    imageDark: 'url("https://media.licdn.com/dms/image/C5612AQHJ1A6uNz1Syw/article-cover_image-shrink_720_1280/0/1534935247774?e=2147483647&v=beta&t=ZqrgryboEliGFPYFRWz287lJ6-Gfe6eXrHAx7IlRKco")',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  // const LPtheme = createTheme(getLPTheme(mode));
  // const defaultTheme = createTheme({ palette: { mode } });
  return (
 
    <Container
    // sx={{ py: { xs: 8, sm: 16 } }}
    >
      <Grid container spacing={6}>
        <Grid  xs={12} md={6}>
          <div>
            <Typography level="h4" >
              Product features
            </Typography>
            <Typography
             level="body-sm"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
            Open Crypto Exchange is more than just a technology. It’s also what the technology stands for. Some of the important guiding philosophies are listed below.
            </Typography>
          </div>
          <Grid container  gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
            sx={{
               backgroundImage: (theme) =>
               theme.palette.mode === 'light'
                   ? items[selectedItemIndex].imageLight
                  : items[selectedItemIndex].imageDark,
               backgroundSize: 'cover',
              backgroundPosition: 'center',
               minHeight: 280,
            }}
            />
            <Box 
            // sx={{ px: 2, pb: 2 }}
            >
              <Typography level="body-sm" >
                {selectedFeature.title}
              </Typography>
              <Typography level="body-sm" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                level="body-sm"
                // fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                level="body-sm"
                      // fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                  level="body-sm"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      level="body-sm"
                      // fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 400,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>

  );
}
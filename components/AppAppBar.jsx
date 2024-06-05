import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '/public/logo.svg'

import { Typography } from '@mui/material';
import { brand } from '../app/getLPTheme';
import Image from 'next/image';


export default function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container px="0px" maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            px: 0,
            mx: 0,
            paddingLeft: "0px",
            paddingRight: "0px",
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            // flexShrink: 0,
            // borderRadius: '999px',
            // bgcolor: 'hsla(220, 60%, 99%, 0.6)',
            // backdropFilter: 'blur(24px)',
            // maxHeight: 40,
            // border: '1px solid',
            // borderColor: 'divider',
            // boxShadow: '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
          })}
          style={{ paddingLeft: "0px", paddingRight: "0px", }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
            }}
          >

            <Box marginTop="" marginRight="30px">
              <Image src={logo} alt='' />
              {/* <Typography variant='body2' lineHeight="0px" color={brand[10]} textTransform="uppercase">Solutions</Typography> */}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('services')}
              >
                Services
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('whyus')}
              >
                Why us
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('portfolio')}
              >
                Our Work
              </Button>

              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonials
              </Button>


              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => scrollToSection('contactus')}
                sx={{ minWidth: 0 }}
              >
                Contact
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >

            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'background.default',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >

                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem onClick={() => scrollToSection('features')}>
                  Features
                </MenuItem>
                <MenuItem onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </MenuItem>
                <MenuItem onClick={() => scrollToSection('highlights')}>
                  Highlights
                </MenuItem>
                <MenuItem onClick={() => scrollToSection('pricing')}>
                  Pricing
                </MenuItem>
                <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}

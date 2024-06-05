"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import getLPTheme from './getLPTheme';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Technology from '../components/Technology';
import ContactUs from '../components/ContactUs';

export default function Home() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Services />
        <Divider />
        <WhyUs />
        <Divider />
        <Portfolio />
        <Divider />
        <Technology />
        <Divider />
        <Testimonials />
        <Divider />
        <ContactUs />
        <Divider />
        <Divider />
        <Footer />
      </Box>

    </ThemeProvider>
  );
}

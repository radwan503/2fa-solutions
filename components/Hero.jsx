"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { brand } from '../app/getLPTheme';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Grid } from '@mui/material';
import heroImg from '/public/hero/img_1.jpg';


export default function Hero() {


  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundColor: "#f9fcff",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        //height: "calc(100vh - 20px)"
        backgroundImage: 'url(/blob.svg)',
        backgroundPosition: 'center',
      }}
    >
      <Container
        sx={{
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >

        <Grid container spacing={{ xs: 4, md: 2, xl: 3 }} sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Grid item md={7}>
            <Box
              spacing={2}
              alignItems="start"
              useFlexGap
              sx={{ width: { xs: '100%', sm: '100%' } }}
            >
              <Typography
                variant="h1"
                sx={{
                  display: 'flex',
                  color: "#222",
                  flexDirection: { xs: 'column', sm: 'column' },
                  alignItems: 'start',
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: 'clamp(3rem, 10vw, 3.5rem)',

                }}
              >
                Let's build your next
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: 'inherit',
                    color: `${brand[400]}`,

                  }}

                >
                  web experience
                </Typography>
              </Typography>
              <Typography
                textAlign="start"
                variant='h5'
                color="#222"
                sx={{ width: { sm: '100%', md: '100%' }, mt: "20px" }}
              >
                for Startups, Scaleups and Enterprises
              </Typography>

              <Button size='large' sx={{ px: "35px", py: "10px", mt: "30px" }} variant="contained" color="primary">
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Box
              spacing={2}
              alignItems="end"
              useFlexGap
              sx={{ width: { xs: '100%', sm: '100%' } }}
              position="relative"
            >
              <Image src={heroImg} style={{ width: "100%", height: "100%" }} />
              <motion.div
                style={{
                  position: "absolute", top: "-20px", left: '-50px'
                }}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Box backgroundColor="#e4f1ff" borderRadius="20px" px={3} py={1}>
                  <Typography variant='h4' fontWeight="bold" textTransform="uppercase">150+</Typography>
                  <Typography variant='h6' >Successfull Project</Typography>
                </Box>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute", top: "40%", right: '-50px'
                }}
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Box backgroundColor="#fffde8" borderRadius="20px" px={3} py={1}>
                  <Typography variant='h4' fontWeight="bold" textTransform="uppercase">100+</Typography>
                  <Typography variant='h6'>Satisfied Client</Typography>
                </Box>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute", bottom: "10%", left: '-50px'
                }}
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Box backgroundColor="#ebffed" borderRadius="20px" px={3} py={1}>
                  <Typography variant='h4' fontWeight="bold" textTransform="uppercase">30+</Typography>
                  <Typography variant='h6'> Worldwide Serve</Typography>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>

    </Box >
  );
}

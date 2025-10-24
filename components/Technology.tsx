import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { brand } from '../app/getLPTheme';
import { technology } from '../public/data/data';




export default function Technology() {

 return (
  <Container
   id="technology"
   sx={{
    pt: { xs: 4, sm: 12 },
    pb: { xs: 8, sm: 16 },
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
   }}
  >
   <Box
    sx={{
     width: { sm: '100%', md: '100%' },
     textAlign: { sm: 'left', md: 'left' },
    }}
   >
    <Typography component="h2" textTransform="uppercase" variant="h4" color="text.primary">
     TECHNOLOGIES
    </Typography>
    <Typography sx={{
     width: { sm: '100%', md: '50%' },
    }} variant="body1" color="text.secondary">
     We offer only well-recognized and time-tested technologies to support any of your business goals.
    </Typography>
   </Box>
   <Grid container spacing={2.5}>
    {technology.map((technology, index) => (
     <Grid item xs={12} sm={6} md={2} key={index} sx={{ display: 'flex' }}>
      <Card
       sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        p: 1,
        borderRadius: "0px",
        '&:hover': {
         transform: 'translate(-1px, -1px)',
         boxShadow: `12px 12px 0 ${brand[10]}`,
         transition: '.5s ease'
        }
       }}
      >
       <CardContent sx={{
        display: "flex", justifyContent: "center",
        flexDirection: "column", alignItems: "center"
       }}>
        <Image src={technology.logo} height={50} width={50} alt='' />
        <Typography variant="body2" mt={1.2} textTransform="uppercase" fontWeight="bold" color="text.secondary">
         {technology.name}
        </Typography>
       </CardContent>

      </Card>
     </Grid>
    ))}
   </Grid>
  </Container >
 );
}

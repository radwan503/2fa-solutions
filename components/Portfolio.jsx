import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowOutward } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { brand } from '../app/getLPTheme';
import { portfolios } from '../public/data/data';





export default function Portfolio() {


 return (
  <Container
   id="portfolio"
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
     FEATURED PROJECTS
    </Typography>
    <Typography sx={{
     width: { sm: '100%', md: '50%' },
    }} variant="body1" color="text.secondary">
     We have a proven track record of building high quality solutions for customers all over the world.
    </Typography>
   </Box>
   <Grid container spacing={2.5}>
    {portfolios.map((portfolio, index) => (
     <Grid item xs={12} sm={6} md={6} key={index}>
      <Card
       className='portfolio-card'
       sx={{
        p: 0,
        borderRadius: "0px",
        lineHeight: 0,
        position: "relative"
       }}
      >
       <Box sx={{ padding: "0px", paddingBottom: "0px" }}>
        <Image style={{ height: "100%", width: "100%", height: "350px" }} src={portfolio?.banner} width={800} height={400}
         objectFit='cover' alt='' />
        <div className="portfolio-overlay"></div>
       </Box>
       <Box
        sx={{
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: "center",
         position: "absolute",
         bottom: "30px",
         paddingLeft: "30px",
         paddingRight: "30px",
         width: "100%"
        }}
       >
        <Box>
         <Typography variant='h5' textTransform="uppercase" color="#fff" fontWeight="bold">{portfolio?.name}</Typography>
         <Typography variant='body1' color="#fff" textTransform="uppercase">{portfolio?.subtitle}</Typography>
        </Box>
        <Box>
         <Link href={portfolio?.url}>
          <IconButton title='Live' aria-label="fingerprint" sx={{ backgroundColor: `${brand[400]}`, color: "#fff" }} variant="contained" color="#fff">
           <ArrowOutward />
          </IconButton>
         </Link>
        </Box>
       </Box>
      </Card>
     </Grid>
    ))}
   </Grid>
  </Container>
 );
}

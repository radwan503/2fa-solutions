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

const technology = [
 {
  avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
  name: 'Angular',
  logo: '/technology/frontend/angular.svg'

 },
 {
  avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
  name: 'CSS',
  logo: '/technology/frontend/css.svg'


 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
  name: 'JQuery',
  logo: '/technology/frontend/jquery.svg'

 },
 {
  avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
  name: 'Javscript',
  logo: '/technology/frontend/js.svg'

 },
 {
  avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
  name: 'next js',
  logo: '/technology/frontend/next.svg'

 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'react',
  logo: '/technology/frontend/react.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'vue',
  logo: '/technology/frontend/vue.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'Php',
  logo: '/technology/backend/php.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'java',
  logo: '/technology/backend/java.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'laravel',
  logo: '/technology/backend/laravel.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'node js',
  logo: '/technology/backend/node.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'python',
  logo: '/technology/backend/python.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'mongodb',
  logo: '/technology/database/mongodb.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'elastic search',
  logo: '/technology/database/elastric.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'postgress',
  logo: '/technology/database/post.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'sqlite',
  logo: '/technology/database/sqlite.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'figma',
  logo: '/technology/ui/figma.svg'
 },
 {
  avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  name: 'adobe',
  logo: '/technology/ui/adobe.svg'
 },

];



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

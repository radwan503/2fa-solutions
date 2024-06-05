import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { brand } from '../app/getLPTheme';


export default function ContactUs() {
 const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
   email: data.get('email'),
   password: data.get('password'),
  });
 };

 return (
  <Container id="contactus" sx={{ py: { xs: 8, sm: 8 } }}>
   <Box
    sx={{
     width: { sm: '100%', md: '100%' },
     textAlign: { sm: 'left', md: 'left' },
     mb: "30px",

    }}
   >
    <Typography component="h2" textTransform="uppercase" variant="h4" color="text.primary">
     LET'S TAlk
    </Typography>
    <Typography sx={{
     width: { sm: '100%', md: '50%' },
    }} variant="body1" color="text.secondary">
     Take your first step towards creating an impact
    </Typography>
   </Box>
   <Grid container>
    <Grid item md={12}>
     <Box
      sx={{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       backgroundColor: "#f9f9f9",
       p: 5,
       borderRadius: "20px",
       transform: 'translate(-1px, -1px)',
       boxShadow: `12px 12px 0 ${brand[400]}`,
      }}
     >

      <Box component="form" au autoComplete='false' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
       <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
         <TextField
          id="fname"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter your first name"
          placeholder="Name"
          inputProps={{
           autoComplete: 'off',
           'aria-label': 'Enter your first name',
          }}
          sx={{
           height: "50px",
          }}
         />
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="email"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter your email"
          placeholder="Email"
          inputProps={{
           autoComplete: 'off',
           'aria-label': 'Enter your email',
          }}
          sx={{
           height: "50px",

          }}
         />
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="phone"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter your phone"
          placeholder="Phone"
          inputProps={{
           autoComplete: 'off',
           'aria-label': 'Enter your phone',
          }}
          sx={{
           height: "50px",
          }}
         />
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="email"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter your project type"
          placeholder="Project Type(Ex:Business)"
          inputProps={{
           autoComplete: 'off',
           'aria-label': 'Enter your project type',
          }}
          sx={{
           height: "50px",

          }}
         />
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="days"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter your days"
          placeholder="Under 3 Month"
          inputProps={{
           autoComplete: 'off',
           'aria-label': 'Enter your days',
          }}
          sx={{
           height: "50px",

          }}
         />
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="budget"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter your budget"
          placeholder="1 Million USD"
          inputProps={{
           autoComplete: 'off',
           'aria-label': 'Enter your budget',
          }}
          sx={{
           height: "50px",

          }}
         />
        </Grid>
        <Grid item xs={12}>
         <TextField
          id="budget"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          aria-label="Enter your budget"
          inputProps={{
           autoComplete: 'off',
           'aria-label': 'Enter your budget',
          }}
          sx={{
           height: "120px",

          }}
         />
        </Grid>

        <Grid item xs={12}>
         <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I want to receive inspiration, marketing promotions and updates via email."
         />
        </Grid>
       </Grid>
       <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
       >
        Send Message
       </Button>

      </Box>
     </Box>
    </Grid>
    <Grid item md={5}></Grid>
   </Grid>

  </Container>
 );
}
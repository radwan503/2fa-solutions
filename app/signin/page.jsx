"use client"
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useBoolean } from 'usehooks-ts';
import toast from 'react-hot-toast';
import { CircularProgress } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

const SignIn = () => {
 const { login } = useAuth()
 const [mobileNumber, setMobileNumber] = useState('');
 const showOTPForm = useBoolean(false);
 const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting }
 } = useForm();

 const {
  register: register_otp,
  handleSubmit: handleSubmit_otp,
  formState: { errors: errors_otp, isSubmitting: isSubmitting_otp }
 } = useForm();

 const onSubmitMobileNumber = async (data) => {
  try {
   const res = await fetch(new URL(`${process.env.NEXT_PUBLIC_URL}/api/send-otp`), {
    method: "POST",
    headers: {
     "content-type": "application/json",
    },
    body: JSON.stringify({
     mobileNumber: `+88${data.mobileNumber}`
    })
   });

   const out = await res.json();
   if (!res.ok) {
    throw new Error(out?.message)
   }
   setMobileNumber("+88" + data.mobileNumber)
   showOTPForm.setTrue()
   toast.success(out?.message)
  } catch (e) {
   const m = e.message
   m && toast.error(m)
  }
 }

 const onSubmitOTP = async (data) => {
  try {
   if (!mobileNumber || !data.otp) {
    throw new Error("Plase provide required information")
   }
   await login(mobileNumber, data.otp)
  } catch (e) {
   const m = e?.message
   m && toast.error(m)
  }
 }

 return (

  <Grid container component="main" sx={{ height: '100vh' }}>
   <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
     backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
     backgroundRepeat: 'no-repeat',
     backgroundColor: '#f9f9f9',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
    }}
   />
   <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
     sx={{
      my: 8,
      mx: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     }}
    >
     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
     </Avatar>
     <Typography component="h1" variant="h5">
      Sign in
     </Typography>
     <Box
      component="form"
      id="form"
      noValidate
      onSubmit={handleSubmit(onSubmitMobileNumber)}
      sx={{ mt: 1, display: showOTPForm.value ? 'none' : undefined }}>
      <TextField
       margin="normal"
       required
       fullWidth
       id="mobileNumber"
       label="Mobile Number"
       //name="mobileNumber"
       autoComplete="mobileNumber"
       {...register("mobileNumber", {
        required: true,
        pattern: new RegExp("^(01[3-9]\\d{8})$"),
       })}
       error={errors.mobileNumber ? true : false}
       helperText={errors.mobileNumber ? "Mobile number is reqired" : ""}
       autoFocus
      />

      <Button
       type="submit"
       fullWidth
       variant="contained"
       sx={{ mt: 3, mb: 2 }}
       disabled={isSubmitting}
       startIcon={
        isSubmitting && <CircularProgress disableShrink size={16} />
       }
      >
       Send OTP
      </Button>
     </Box>

     <Box component="form"
      id='form2'
      noValidate
      onSubmit={handleSubmit_otp(onSubmitOTP)}
      sx={{ mt: 1, display: showOTPForm.value ? undefined : 'none' }}>
      <TextField
       margin="normal"
       required
       fullWidth
       id="otp"
       label="OTP"
       name="opt"
       autoComplete="otp"
       autoFocus
       {...register_otp("otp", { required: true })}
       error={errors_otp.otp ? true : false}
       helperText={errors_otp.otp ? "OTP is required" : ""}
      />

      <Button
       type="submit"
       fullWidth
       variant="contained"
       sx={{ mt: 3, mb: 2 }}
      >
       Sign In
      </Button>

     </Box>
    </Box>
   </Grid>
  </Grid>
 );
}

export default SignIn
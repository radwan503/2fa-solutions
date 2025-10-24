'use client'

import { Typography, Modal, TextField, Tabs, Tab, Box, Button } from "@mui/material";

const AuthModal = ({ authOpen, setAuthOpen, authTab, setAuthTab }) => {
   return (
    <Modal
      open={authOpen}
      onClose={() => setAuthOpen(false)}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: 500,
          height:500,
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Tabs
          value={authTab}
          onChange={(e, newVal) => setAuthTab(newVal)}
          variant="fullWidth"
          sx={{ mb: 2 }}
        >
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>

        {authTab === 0 ? (
          // ✅ Sign In form
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField 
            type="email" 
            fullWidth 
            hiddenLabel
            size="small"
            variant="outlined"
            placeholder="Email"
            inputProps={{
            autoComplete: 'email',
            
            }}
            sx={{
            height: "50px",
            }}
            />
            <TextField 
            type="password" 
            fullWidth 
            hiddenLabel
            size="small"
            variant="outlined"
            placeholder="Password"
            inputProps={{
            autoComplete: 'new-password',
            }}
            sx={{
            height: "50px",
            }}
            />
            <Button variant="contained" fullWidth>
              Sign In
            </Button>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", cursor: "pointer", mt: 1 }}
              color="primary"
              onClick={() => setAuthTab(1)}
            >
              Don’t have an account? Sign Up
            </Typography>
          </Box>
        ) : (
          // ✅ Sign Up form
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
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
            <TextField 
             type="email" 
             fullWidth
            hiddenLabel
            size="small"
            variant="outlined"
            placeholder="Password"
            inputProps={{
            autoComplete: 'email',
            }}
            sx={{
            height: "50px",
            }}
            />
            <TextField 
            type="password"
            fullWidth
            hiddenLabel
            size="small"
            variant="outlined"
            placeholder="Password"
            inputProps={{
            autoComplete: 'new-password',
            }}
            sx={{
            height: "50px",
            }}
            />
            <Button variant="contained" fullWidth>
              Create Account
            </Button>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", cursor: "pointer", mt: 1 }}
              color="primary"
              onClick={() => setAuthTab(0)}
            >
              Already have an account? Sign In
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
export default AuthModal
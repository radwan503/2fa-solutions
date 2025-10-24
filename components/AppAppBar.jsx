"use client";
import { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Image from "next/image";
import logo from "/public/logo.svg";
import AuthModal from "./AuthModal";
import Link from "next/link";


export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState(0); // 0 = Sign in, 1 = Sign up

  // ✅ Detect scroll and update background state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
      setOpen(false);
    }
  };



  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: scrolled ? 2 : 0,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
          padding: "5px",
        }}
      >
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Toolbar sx={{ px: 0 }} style={{paddingLeft:"0px",paddingRight:"0px"}}>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}>
              <Box marginRight="30px">
                <Link href="/"><Image src={logo} alt="logo" /></Link>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button variant="text" color="info" size="small" onClick={() => scrollToSection("services")}>
                  Services
                </Button>
                <Button variant="text" color="info" size="small" onClick={() => scrollToSection("whyus")}>
                  Why us
                </Button>
                <Button variant="text" color="info" size="small" onClick={() => scrollToSection("portfolio")}>
                  Our Work
                </Button>
                <Button variant="text" color="info" size="small" onClick={() => scrollToSection("testimonials")}>
                  Testimonials
                </Button>
                <Button variant="text" color="info" size="small" onClick={() => scrollToSection("contactus")}>
                  Contact
                </Button>
              </Box>
            </Box>

            {/* ✅ Desktop Auth Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
              <Button color="primary" variant="text" size="small" onClick={() => { setAuthTab(0); setAuthOpen(true); }}>
                Sign in
              </Button>
              <Button color="primary" variant="contained" size="small" onClick={() => { setAuthTab(1); setAuthOpen(true); }}>
                Sign up
              </Button>
            </Box>

            {/* ✅ Mobile Drawer */}
            <Box sx={{ display: { sm: "flex", md: "none" } }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  <MenuItem onClick={() => scrollToSection("features")}>Features</MenuItem>
                  <MenuItem onClick={() => scrollToSection("testimonials")}>Testimonials</MenuItem>
                  <MenuItem onClick={() => scrollToSection("highlights")}>Highlights</MenuItem>
                  <MenuItem onClick={() => scrollToSection("pricing")}>Pricing</MenuItem>
                  <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={() => { setAuthTab(1); setAuthOpen(true); setOpen(false); }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      fullWidth
                      onClick={() => { setAuthTab(0); setAuthOpen(true); setOpen(false); }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ✅ Modal Component */}
      <AuthModal
        authOpen={authOpen}
        setAuthOpen={setAuthOpen}
        authTab={authTab}
        setAuthTab={setAuthTab}
      />
    </>
  );
}

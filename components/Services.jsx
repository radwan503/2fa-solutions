import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { Tabs, Tab, Button } from '@mui/material';
import { brand } from '../app/getLPTheme';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box py={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const services = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Software Development',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Web Application Development',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Mobile App Development',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'UI/UX Design Services',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Enterprise Software Integration',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <QueryStatsRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'IT Consulting and Strategy',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

const solutions = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Innovative functionality',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <QueryStatsRoundedIcon sx={{ fontSize: "30px", backgroundColor: `${brand[400]}`, height: "50px", width: "50px", padding: "12px", borderRadius: "10px" }} />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Services() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="services"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',

      }}
    >
      <Container
        sx={{
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
            Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', width: { sm: '100%', md: '50%' }, }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <div >
            <Tabs value={value} display="flex" sx={{ gap: "20px" }} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="SERVICES" id="tab-0" sx={{ fontWeight: "bold", fontSize: "20px", px: 0, marginRight: "30px", color: "#000" }} aria-controls="tabpanel-0" />
              <Tab label="SOLUTIONS" id="tab-1" sx={{ fontWeight: "bold", fontSize: "20px", px: 0, marginRight: "30px", color: "#000" }} aria-controls="tabpanel-1" />
              <Tab label="FOR STARTUP" id="tab-2" sx={{ fontWeight: "bold", fontSize: "20px", px: 0, color: "#000" }} aria-controls="tabpanel-2" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Box px={0}>
                <Grid container spacing={2.5}>
                  {services.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Stack
                        direction="column"
                        color="inherit"
                        component={Card}
                        spacing={1}
                        useFlexGap
                        sx={{
                          p: 3,
                          height: '100%',
                          border: '1px solid',
                          borderColor: 'hsla(220, 25%, 25%, .1)',
                          background: 'transparent',
                          backgroundColor: 'grey.50',
                          boxShadow: 'none',
                          borderRadius: "0px",
                          '&:hover': {
                            background: 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)',
                            transform: 'translate(-1px, -1px)',
                            boxShadow: `12px 12px 0 ${brand[10]}`,
                            transition: '.5s ease'
                          }
                        }}
                      >
                        <Box sx={{
                          opacity: '100%', color: "#fff"
                        }}>

                          {item.icon}</Box>
                        < div >
                          <Typography mt={1} fontWeight="medium" color="#222" variant='h5' gutterBottom>
                            {item.title}
                          </Typography>
                          <Typography mt={3} variant="body2" sx={{ color: 'grey.400' }}>
                            {item.description}
                          </Typography>
                        </div>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box px={0}>
                <Grid container spacing={2.5}>
                  {solutions.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Stack
                        direction="column"
                        color="inherit"
                        component={Card}
                        spacing={1}
                        useFlexGap
                        sx={{
                          p: 3,
                          height: '100%',
                          border: '1px solid',
                          borderColor: 'hsla(220, 25%, 25%, .1)',
                          background: 'transparent',
                          backgroundColor: 'grey.50',
                          boxShadow: 'none',
                          borderRadius: "0px",
                          '&:hover': {
                            background: 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)',
                            transform: 'translate(-1px, -1px)',
                            boxShadow: `12px 12px 0 ${brand[10]}`,
                            transition: '.5s ease'
                          }
                        }}
                      >
                        <Box sx={{
                          opacity: '100%', color: "#fff"
                        }}>

                          {item.icon}</Box>
                        < div >
                          <Typography mt={1} fontWeight="medium" color="#222" variant='h5' gutterBottom>
                            {item.title}
                          </Typography>
                          <Typography mt={3} variant="body2" sx={{ color: 'grey.400' }}>
                            {item.description}
                          </Typography>
                        </div>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box py="50px" display="flex" justifyContent="center" alignItems="center" gap="20px" >
                <Typography variant='h4' color="#222">Need a consultation for your project?</Typography>
                <Button size='large' sx={{ px: "35px", py: "10px" }} variant="contained" color="primary">
                  Contact Us
                </Button>
              </Box>
            </TabPanel>
          </div>
        </Box>

      </Container >
    </Box >
  );
}

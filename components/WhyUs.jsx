import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Chip as MuiChip } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { AcUnit, Attractions, AutoAwesome } from '@mui/icons-material';
import { brand } from '../app/getLPTheme';

const items = [
  {
    icon: <AutoAwesome />,
    title: 'Quality and innovation',
    description:
      'We build high-performing, scalable websites using the latest web frameworks, CMS, and e-commerce platforms, ensuring mobile optimization, security, and effective visitor conversion.',
    imageLight: 'url("/expartise.jpg")',
    imageDark: 'url("/expartise.jpg")',
  },
  {
    icon: <Attractions />,
    title: 'Dedicated service',
    description:
      'We provide dedicated account management and support, acting as an extension of your team to ensure your long-term success and satisfaction.',
    imageLight: 'url("/quality.jpg")',
    imageDark: 'url("/quality.jpg")',
  },
  {
    icon: <AcUnit />,
    title: 'Proven expertise',
    description:
      'With over seven years of successful experience, we build modern, user-friendly websites and web apps using the latest web technologies and design trends.',
    imageLight: 'url("/service.jpg")',
    imageDark: 'url("/service.jpg")',
  }

];

function Chip({ selected, ...props }) {
  return <MuiChip {...props} />;
}

export default function WhyUs() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="whyus" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" textTransform="uppercase" variant="h4" color="text.primary">
              Why 2FA?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Provide a brief overview of the key features of the product. For
              example, you could list the number of features, their types or
              benefits, and add-ons.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                selected={selectedItemIndex === index}
              />
            ))}
          </Grid>
          <Card
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" fontWeight="medium" gutterBottom>
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Card>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={(theme) => ({
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  borderRadius: "0px",
                  background: 'none',
                  ...(selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                    borderColor: 'primary.light'
                  }),
                  '&:hover': {
                    background: 'linear-gradient(to bottom right, hsla(27.45, 91.38%, 60.51%, 0.2) 25%, hsla(27.45, 91.38%, 60.51%, 0.2) 100%)',
                    borderColor: 'primary.light',
                    boxShadow: '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
                  },
                })}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      color:
                        theme.palette.mode === 'light' ? 'grey.400' : 'grey.600',
                      ...(selectedItemIndex === index && {
                        color: 'primary.main',
                      }),
                    })}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color="text.primary"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ mb: 1.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
              borderRadius: "10px",
              transform: 'translate(-1px, -1px)',
              boxShadow: `12px 12px 0 ${brand[400]}`
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: "100%",
                height: "100%",
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

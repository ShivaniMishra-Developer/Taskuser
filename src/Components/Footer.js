import React from 'react';
import { Box, Container, Grid, Link, Typography, Divider, styled } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#007BFF', // Blue background color
  color: '#ffffff', // White text color
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));



const Logo = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(0),
  },
}));

const NavigationLinks = styled(Box)(({ theme }) => ({
  '& ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  '& li': {
    marginBottom: theme.spacing(1),
    '& a': {
      color: '#ffffff', // White text color
      textDecoration: 'none',
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: '#d1e7fd', // Lighter blue for hover
      },
    },
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const LegalLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    marginTop: 0,
  },
  '& a': {
    color: '#ffffff', // White text color
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: '#d1e7fd', // Lighter blue for hover
    },
  },
}));

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const Footer = () => {
  const value = 3.5;
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <Logo>
            <img
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt="Logo"
              style={{ maxWidth: '120px', height: 'auto' }} // Adjust logo size
            />
          </Logo>
          <Grid container spacing={2} justifyContent="center">
            {/* <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <NavigationLinks>
                <ul>
                  <li><Link href="#" underline="none">About</Link></li>
                  <li><Link href="#" underline="none">Features</Link></li>
                  <li><Link href="#" underline="none">Works</Link></li>
                  <li><Link href="#" underline="none">Career</Link></li>
                </ul>
              </NavigationLinks>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Help
              </Typography>
              <NavigationLinks>
                <ul>
                  <li><Link href="#" underline="none">Customer Support</Link></li>
                  <li><Link href="#" underline="none">Delivery Details</Link></li>
                  <li><Link href="#" underline="none">Terms & Conditions</Link></li>
                  <li><Link href="#" underline="none">Privacy Policy</Link></li>
                </ul>
              </NavigationLinks>
            </Grid> */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <NavigationLinks>
                <ul>
                  <li><Link href="#" underline="none">Free eBooks</Link></li>
                  <li><Link href="#" underline="none">Development Tutorial</Link></li>
                  <li><Link href="#" underline="none">How to - Blog</Link></li>
                  <li><Link href="#" underline="none">Youtube Playlist</Link></li>
                </ul>
              </NavigationLinks>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Products
              </Typography>
              <NavigationLinks>
                <ul>
                  <li><Link href="#" underline="none">Get Coupon</Link></li>
                  <li><Link href="#" underline="none">Affiliates</Link></li>
                  <li><Link href="#" underline="none">Events</Link></li>
                  <li><Link href="#" underline="none">Live Support</Link></li>
                </ul>
              </NavigationLinks>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          {/* <Copyright variant="body2">
            © 2024 Celebration. All rights reserved.
          </Copyright> */}
          {/* <LegalLinks>
            <Link href="#" underline="none">Terms of Service</Link>
            <Link href="#" underline="none">Privacy Policy</Link>
            <Link href="#" underline="none">Cookies</Link>
          </LegalLinks> */}
        </FooterContent>


        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

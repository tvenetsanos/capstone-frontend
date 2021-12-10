import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './footerstyles';

const Footer = () => {
  return (
    <Box style={{bottom: "unset"}}>
      <h1 style={{color: '#ebc344',
        textAlign: 'center',
        marginTop: '-50px'}}>
        Puppy Love: A place to find Puppy Play Dates
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href='#'>Aim</FooterLink>
            <FooterLink href='#'>Vision</FooterLink>
            <FooterLink href='#'>Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href='#'>Sign Up</FooterLink>
            <FooterLink href='#'>Log In</FooterLink>
            <FooterLink href='#'>Message</FooterLink>
            <FooterLink href='#'>FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href='#'>571-242-6092</FooterLink>
            <FooterLink href='#'>puppylove@gmail.com</FooterLink>
            <FooterLink href='#'>Facebook</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{marginLeft: '10px'}}>
                Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-instagram'>
                <span style={{marginLeft: '10px'}}>
                Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-twitter'>
                <span style={{marginLeft: '10px'}}>
                Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-youtube'>
                <span style={{marginLeft: '10px'}}>
                Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;

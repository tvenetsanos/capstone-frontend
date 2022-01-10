import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './footerstyles';
import '../css/footer.css'

const Footer = () => {
  return (
    <Box className="footer">
      <h1 className="footerName">
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
                <span className="footerLink">
                Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-instagram'>
                <span className="footerLink">
                Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-twitter'>
                <span className="footerLink">
                Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-youtube'>
                <span className="footerLink">
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

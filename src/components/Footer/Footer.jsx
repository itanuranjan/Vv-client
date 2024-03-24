// Footer.js

import React from 'react';
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {/* WhisperVerse  */}
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Get Help 24/7</Heading>
            <FooterLink href="/raise-query">
              <i className="far fa-question-circle">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Help center
                </span>
              </i>
            </FooterLink>
            <FooterLink href={`https://wa.me/${'7004343330'}`}>
            <i class="far fa-comment">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Chat with us
                </span>
              </i>
            </FooterLink>
            <FooterLink href={`tel:${'7004343330'}`}>
              <i className="fa fa-phone">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                 +91 7004343330
                </span>
              </i>
            </FooterLink>
            <FooterLink href={`mailto:${'support@vv.com'}`}>
              <i className="far fa-envelope">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  support@vv.com
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Cities</Heading>
            <FooterLink href="/cities/varanasi">Varanasi</FooterLink>
            <FooterLink href="/cities/new-delhi">New-Delhi</FooterLink>
            <FooterLink href="/cities/mumbai">Mumbai</FooterLink>
            <FooterLink href="/cities">+36 more</FooterLink>
          </Column>
          <Column>
            <Heading>VentureVibe</Heading>
            <FooterLink href="/about-us">Our Story</FooterLink>
            <FooterLink href="/career">Careers</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
            <FooterLink href="/our-team">Our Team</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/__anuranjan__">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/iamanuranjan">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UC3syvllcr9GNhRkFQUpPR6w">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>

      <div
        style={{
          padding: "10px",
          textAlign: "center",
          color: "white",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        <hr></hr>
        <p style={{ margin: '5px 10px', color:'red'}}>&copy; {2024} VentureVibe. All rights reserved.</p>
        <FooterLink href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</FooterLink>
        <FooterLink href="/terms-of-usage">Terms of Usage</FooterLink>
      </div>
      <div style={{marginBottom:'40px'}}> </div>
    </Box>
  );
};

export default Footer;

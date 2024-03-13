// Filename - components/Footer.js

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
            <FooterLink href="#">
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
            <FooterLink href="#">
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
            <FooterLink href="#">
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
            <FooterLink href="#">
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
            {/* <FooterLink href="#">Help center</FooterLink> */}
            {/* <FooterLink href="#">Chat with us</FooterLink>
            <FooterLink href="#">Call +13478970100</FooterLink>
            <FooterLink href="#">support@headout.com</FooterLink> */}
          </Column>
          <Column>
            <Heading>Cities</Heading>
            <FooterLink href="/cities/varanasi">Varanasi</FooterLink>
            <FooterLink href="#">New-Delhi</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
            <FooterLink href="#">+36 more</FooterLink>
          </Column>
          <Column>
            <Heading>VentureVibe</Heading>
            <FooterLink href="#">Our Story</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Gallary</FooterLink>
            <FooterLink href="#">Our Team</FooterLink>
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
            <FooterLink href="#">
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
            <FooterLink href="#">
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
            <FooterLink href="#">
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
        //   backgroundColor: "#f0f0f0",
          padding: "10px",
          textAlign: "center",
          color: "white",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
      <hr></hr>
        <p>&copy; {2024} VentureVibe. All rights reserved.</p>
      </div>
    </Box>
  );
};
export default Footer;

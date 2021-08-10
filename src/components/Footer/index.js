import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

import {
  FaFacebook,
  FaMedium,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/">How it works </FooterLink>
              <FooterLink to="/">Testimonials </FooterLink>
              <FooterLink to="/">Careers </FooterLink>
              <FooterLink to="/">Investors </FooterLink>
              <FooterLink to="/">Terms of Service </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support </FooterLink>
              <FooterLink to="/">Destinations </FooterLink>
              <FooterLink to="/">Sponsorships </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">Submit Video </FooterLink>
              <FooterLink to="/signin">Ambassadors </FooterLink>
              <FooterLink to="/signin">Agency </FooterLink>
              <FooterLink to="/signin">Influencer </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram </FooterLink>
              <FooterLink to="/signin">Facebook </FooterLink>
              <FooterLink to="/signin">Youtube </FooterLink>
              <FooterLink to="/signin">Twitter </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla &#169; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.medium.com"
                target="_blank"
                aria-label="Medium"
              >
                <FaMedium />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

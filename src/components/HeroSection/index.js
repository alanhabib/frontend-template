import React, { useState } from "react";
import {
  ArrorForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../assets/videos/video.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive 250$ in credit towarsd
          your next payment
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary={true}
            dark="true"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrorForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

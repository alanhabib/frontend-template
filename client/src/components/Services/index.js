import React from "react";
import Icon1 from "../../assets/images/JSHTML.svg";
import Icon2 from "../../assets/images/svg-1.svg";
import Icon3 from "../../assets/images/REACT.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>my Work</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Coding</ServicesH2>
          <ServicesP>
            Solving complex problems in JavaScript client and server based.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Mentoring</ServicesH2>
          <ServicesP>
            If you want a mentor to guide you through the vast occean of
            JavaScript I can set up a guide for you.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Articles/Blog</ServicesH2>
          <ServicesP>
            I will soon open a section on my website where I write articles
            about programming and some blog articles of my way on becoming a
            developer.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

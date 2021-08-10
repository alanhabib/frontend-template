import React from "react";
import Icon1 from "../../assets/images/svg-1.svg";
import Icon2 from "../../assets/images/svg-2.svg";
import Icon3 from "../../assets/images/svg-3.svg";
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
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Virtual offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership cards that returns 5% cash back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

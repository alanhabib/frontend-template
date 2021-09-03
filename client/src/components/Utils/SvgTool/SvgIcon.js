import React from "react";
import { SvgContainer } from "./SvgIconElements";

const SvgIcon = (props) => {
  const { Icon } = props;
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  );
};

export default SvgIcon;

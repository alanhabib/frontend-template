import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    transition: all 0.2s ease-in-out;
  }
`;

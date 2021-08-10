import Car from "../../assets/images/svg-1.svg";
import Pig from "../../assets/images/svg-2.svg";
import SignUp from "../../assets/images/svg-4.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without fees",
  buttonLabel: "Get started",
  imgStart: false,
  img: Car,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without fees",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Pig,
  alt: "Pig",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our team",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without fees",
  buttonLabel: "Start now",
  imgStart: false,
  img: SignUp,
  alt: "SignUp",
  dark: false,
  primary: false,
  darkText: true,
};

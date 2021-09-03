import Avatar from "../../assets/images/svg-5.svg";
import Projects from "../../assets/images/fullstack.svg";
import SignUp from "../../assets/images/MOBILE.svg";
import React from "../../assets/images/REACT.svg";

export const homeObjOne = {
  id: "blog",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Read my articles",
  headline: "My journey and programming",
  description:
    "In life there is so much to learn, for every new thing I read I will write it down how I understood it. ",
  buttonLabel: "Contact",
  imgStart: false,
  img: SignUp,
  alt: "SignUp",
  dark: false,
  primary: false,
  darkText: true,
  start: false,
  path: "/blog",
};

export const homeObjTwo = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About me",
  headline: "Hi! I'm Alan. Frontend developer.",
  description:
    "I am a self-taught developer. Passionate about programming, reading and martial arts. Father of three and brother of five.",
  buttonLabel: "Text me up?",
  imgStart: true,
  img: Avatar,
  alt: "Avatar",
  dark: true,
  primary: true,
  darkText: false,
  start: true,
  path: "/blog",
};

export const homeObjThree = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "mY projects",
  headline: "Check out my projects!",
  description:
    "I've done some small/big projects in order to showcase some of my frontend knowledge. Feel free to clone my projects and leave comments on improvements!",
  buttonLabel: "Projects",
  imgStart: true,
  img: Projects,
  alt: "Projects",
  dark: false,
  primary: false,
  darkText: true,
  start: false,
  path: "/blog",
};

export const homeObjFour = {
  id: "services",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without fees",
  buttonLabel: "Get started",
  imgStart: false,
  img: React,
  alt: "React",
  dark: true,
  primary: true,
  darkText: false,
  start: false,
  path: "/blog",
};

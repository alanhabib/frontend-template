import moment from "moment";
import { ReactComponent as One } from "../images/svg-1.svg";
import { ReactComponent as Three } from "../images/REACT.svg";
import { ReactComponent as Four } from "../images/MOBILE.svg";
import { ReactComponent as Five } from "../images/JSHTML.svg";
import { ReactComponent as Six } from "../images/fullstack.svg";

export default [
  {
    title: "Software Engineer Salary in 2020",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Tech Culture"],
    link: "#",
    image: <One />,
  },
  {
    title: "GraphQL vs REST",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["React", "JavaScript"],
    link: "#",
    image: <Three />,
  },
  {
    title: "A Day in the Life of a Programmer",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Tech Culture"],
    link: "#",
    image: <Four />,
  },
  {
    title: "Brain Hacks for Learning to Program",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Brain Health"],
    link: "#",
    image: <Five />,
  },
  {
    title: "React Vs Vue",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["React", "Vue"],
    link: "#",
    image: <Six />,
  },
];

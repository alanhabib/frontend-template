import moment from "moment";
import { ReactComponent as One } from "../images/svg-1.svg";
import { ReactComponent as Two } from "../images/svg-2.svg";
import { ReactComponent as Three } from "../images/svg-3.svg";
import { ReactComponent as Four } from "../images/svg-4.svg";
import { ReactComponent as Five } from "../images/svg-5.svg";

export default [
  {
    title: "Can anyone code?",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Tech Culture", "Tech News"],
    link: "#",
    image: <One />,
  },
  {
    title: "Using AWS S3 for Storing Blog Images",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Cloud"],
    link: "#",
    image: <Two />,
  },
  {
    title: "Popular Programming Languages in 2020",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Tech News", "Tech Culture"],
    link: "#",
    image: <Three />,
  },
  {
    title: "Brain Hacks for Learning to Program",
    date: moment().format("MMMM DD, YYYY"),
    categories: ["Brain Health"],
    link: "#",
    image: <Four />,
  },
];

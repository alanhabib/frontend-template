import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { ReactComponent as Logo } from "../../assets/images/svg-5.svg";

const navLinks = [
  {
    title: "Blog",
    path: "blog",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Discover",
    path: "discover",
  },
  {
    title: "Services",
    path: "services",
  },
];
const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo width="50px" height="50px" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navLinks?.map((link, i) => (
              <NavItem key={i}>
                <NavLinks
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {link.title}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default NavBar;

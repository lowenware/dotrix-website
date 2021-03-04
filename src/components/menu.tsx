import { Container, Separator } from "./utils";
import { query } from "src/config/mediaQuery";
import CommunityLinks from "./helpers/communityLinks";
import Copyright from "./helpers/copyright";
import DonateButton from "./helpers/donateButton";
import dotrix from "src/interfaces/dotrix";
import GetButton from "./helpers/getButton";
import Link from "next/link";
import menu from "src/config/menu";
import React, { useState } from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

export const NavBarHeight = 62;

const H1 = styled.h1`
  margin-left: 6px;
`;

const Icon = styled.img`
  height: 2rem;
  @media ${query.md} {
    display: none;
  }
`;

const Nav = styled.nav`
  background: ${theme.color.darkBlue};
  position: sticky;
  top: 0;
  z-index: 103;

  a, div {
    color: ${theme.color.white};
  }

  &.show {
    ul {
      left: 0%;
      touch-action: none;
    }
    #nav-overlay {
      position: fixed;
      top: ${NavBarHeight}px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 101;
      background: rgba(0, 0, 0, 0.75);
      transition: ${theme.transition.normal};
      touch-action: none;

      @media ${query.md} {
        display: none;
      }
    }
  }
`;

const NavBar = styled.div`
  padding: ${theme.padding.x1} 0;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  background: #0d3348;

  list-style: none;

  position: fixed;
  top: ${NavBarHeight}px;
  left: -100%;
  right: 0;
  bottom: 0;
  width: max-content;
  max-width: 100%;
  z-index: 102;
  transition: ${theme.transition.normal};
  padding: 15px;

  @media ${query.md} {
    padding: 0;
    flex-direction: row;
    background: transparent;
    position: static;
    width: auto;
  }
`;

const Li = styled.li`
  font-size: 1.3rem;
  padding: 15px 0;
  @media ${query.md} {
    font-size: initial;
    padding: 5px 10px;
  }
  a {
    width: 100%;
  }
`;

const StyledCopyright = styled(Copyright)`
  margin: 1rem 0;
`;

const Buttons = styled.div`
  margin-top: auto;
  button {
    width: 100%;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    padding: 15px;
  }
`;

const Menu: React.FC = () => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  function close() {
    setShow(false);
  }

  return (
    <>
      <Nav id="navbar" className={(show ? "show" : "")}>
        <Container>
          <NavBar className="flex">
            <Link href="/">
              <a className="flex">
                <img src={dotrix.logo.src} alt={dotrix.logo.alt} />
                <H1>Dotrix</H1>
              </a>
            </Link>
            <Separator />
            <div id="nav-overlay" onClick={() => setShow(false)} />
            <Ul>
              {Object.entries(menu.links).map(([key, link]) => {
                return (
                  <Li key={key}>
                    <Link href={link.href}>
                      <a onClick={close}>{link.title}</a>
                    </Link>
                  </Li>
                );
              })}
              <div className="hide-md flex-col h-100">
                <Buttons>
                  <GetButton />
                  <DonateButton />
                </Buttons>
                <div style={{ marginTop: "auto" }}>
                  <CommunityLinks variant="light" />
                  <StyledCopyright>© 2021 by Löwenware s.r.o.</StyledCopyright>
                </div>
              </div>
            </Ul>
            {show
              ? (<Icon src="/img/icons/cross.svg" alt="Cross icon" onClick={toggle} />)
              : (<Icon src="/img/icons/menu.svg" alt="Burger menu icon" onClick={toggle} />)
            }
          </NavBar>

        </Container>
      </Nav>
    </>
  );
};

export default Menu;

import { Container, Separator } from "../utils";
import { NavBarHeight } from "../menu";
import { query } from "src/config/mediaQuery";
import DonateButton from "../helpers/donateButton";
import dotrix from "src/interfaces/dotrix";
import GetButton from "../helpers/getButton";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: calc(100vh - ${NavBarHeight}px);
  background: #2a536b;
  background-image: url("/img/bg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% auto;
  color: white;
  text-align: center;

  @media ${query.md} {
    max-height: 500px;
    text-align: left;
  }
`;

const H2 = styled.h2`
  font-size: 4rem;

  @media ${query.md} {
    font-size: 6rem;
  }
`;

const Motto = styled.p`
  font-size: 1.3rem;
  margin-top: -1rem;
  margin-bottom: 3rem;
`;

const MottoBtns = styled.div`
  width: 500px;
  left: 6px;
`;

const Logo = styled.img`
  width: 240px;
  position: absolute;
  top: -110px;
  left: -217px;
`;

const Buttons = styled.div`
  button {
    font-size: 1.5rem;
  }
  button:first-child {
    margin-right: 15px;
  }
`;

const Header = styled.div`
  padding-top: 180px;
`;

const Welcome: React.FC = () => {
  return (
    <>
      <div className="hide-md"><MobileContent /></div>
      <div className="show-md"><NormalContent /></div>
    </>
  );
};
export default Welcome;

const NormalContent: React.FC = () => {
  return (
    <Main>
      <Container className="h-100">
        <Header className="flex-col jc-end">
          <div>
            <div className="flex jc-center">
              <Separator />
              <div className="pos-rel">
                <Logo src={dotrix.logo.src} alt={dotrix.logo.alt} draggable={false} />
                <H2>Dotrix</H2>
                <MottoBtns className="pos-abs">
                  <Motto>simple, data-driven game engine written in rust</Motto>
                  <Buttons className="flex">
                    <GetButton />
                    <DonateButton />
                  </Buttons>
                </MottoBtns>
              </div>
              <Separator />
            </div>
          </div>
        </Header>
      </Container>
    </Main>
  );
};

const MobHeader = styled.div`
//background: red;
  height: 30%;
`;
const MobContent = styled.div`
//background: yellow;
  height: 50%;
`;
const MobFooter = styled.div`
//background: green;
  height: 20%;
`;

const MobileContent: React.FC = () => {
  return (
    <Main>
      <Container className="h-100">
        <MobHeader className="flex-col jc-end">
          <H2>Dotrix</H2>
          <p>simple, data-driven game engine written in rust</p>
        </MobHeader>
        <MobContent>

        </MobContent>
        <MobFooter>
          <Buttons className="flex jc-center">
            <GetButton />
            <DonateButton />
          </Buttons>
        </MobFooter>
      </Container>
    </Main>
  );
};

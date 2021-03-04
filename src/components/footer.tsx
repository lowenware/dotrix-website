import { Container, Separator } from "./utils";
import { query } from "src/config/mediaQuery";
import CommunityLinks from "./helpers/communityLinks";
import Copyright from "./helpers/copyright";
import React from "react";
import styled from "styled-components";

const Main = styled.footer`
  background: #fff;
  padding: 25px 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media ${query.sm} {
    flex-direction: row;
  }
`;

const StyledCopyright = styled(Copyright)`
  margin-top: 1rem;
  @media ${query.sm} {
    margin-top: 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <Main className="w-100">
      <StyledContainer>
        <StyledCopyright/>
        <Separator/>
        <CommunityLinks variant="dark" size="24px"/>
      </StyledContainer>
    </Main>
  );
};

export default Footer;

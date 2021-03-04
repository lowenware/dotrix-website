import { Container } from "../utils";
import { query } from "src/config/mediaQuery";
import React from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

const Main = styled.section`
  background: #e5e5e5;
  padding: 3rem 0;
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media ${query.md} {
    flex-direction: row;
  }

  h2, h3, ul, p {
    margin-bottom: 1rem;
  }
`;

const Feature = styled.div`
  &:nth-child(odd) {
    background: ${theme.color.stripe.light};
  }
  &:not(:last-child) {
    padding-bottom: ${theme.spacing.x1};
  }
  @media ${query.md} {
    padding-top: ${theme.spacing.x05};
  }
`;

const Col = styled.div`
  flex: 1;
  &:last-child {
    padding: ${theme.padding.x1};
  }
  @media ${query.md} {
    padding: ${theme.padding.x1};
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Ul = styled.ul`
  padding-left: 1rem;
`;

const Features: React.FC = () => {
  return (
    <Main id="#features" className="w-100">
      <Container>
        <H2>Features</H2>
      </Container>
      <Feature>
        <Container padding="0">
          <Row>
            <Col>
              <Img src="/img/features/fox.jpg" alt="test" />
            </Col>
            <Col>
              <h3>Dynamic Lights</h3>
              <Ul>
                <li>lorem</li>
                <li>ipsum</li>
                <li>lorem</li>
                <li>ipsum</li>
              </Ul>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce nibh. Duis risus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nunc auctor. Praesent in mauris eu tortor porttitor accumsan.</p>
              <a>read more</a>
            </Col>
          </Row>
        </Container>
      </Feature>

      <Feature>
        <Container padding="0">
          <Row>
            <Col>
              <Img src="/img/features/fox.jpg" alt="test" />
            </Col>
            <Col>
              <h3>Skeletal Animation</h3>
              <Ul>
                <li>lorem</li>
                <li>ipsum</li>
                <li>lorem</li>
                <li>ipsum</li>
              </Ul>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce nibh. Duis risus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nunc auctor. Praesent in mauris eu tortor porttitor accumsan.</p>
            </Col>
          </Row>
        </Container>
      </Feature>

      <Feature>
        <Container padding="0">
          <Row>
            <Col>
              <Img src="/img/features/fox.jpg" alt="test" />
            </Col>
            <Col>
              <h3>Marching Cubes</h3>
              <Ul>
                <li>lorem</li>
                <li>ipsum</li>
                <li>lorem</li>
                <li>ipsum</li>
              </Ul>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce nibh. Duis risus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nunc auctor. Praesent in mauris eu tortor porttitor accumsan.</p>
            </Col>
          </Row>
        </Container>
      </Feature>
    </Main>
  );
};

export default Features;

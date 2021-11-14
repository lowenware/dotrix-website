import { Container } from "../utils";
import { query } from "src/config/mediaQuery";
import React from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

const Main = styled.section`
  background: #eeeeee;
  text-align: center;
  padding: ${theme.spacing.x1} 0;
`;

const H2 = styled.h2`
  margin-bottom: 3rem;
`;

const H3 = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  text-align: center;
  flex-grow: 1;
  padding: 15px;
  width: 100%;
  @media ${query.xs} {
    width: 50%;
  }
  @media ${query.md} {
    width: 25%;
  }
`;

const Mask = styled.img`
  width: 100%;
  height: auto;
  padding: 0 15px;
`;

const Img = styled.img`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 60%;
  max-height: 60%;
`;

interface ITechnologyImage {
  src?: string,
  alt?: string,
  style?: React.CSSProperties,
}

const Image: React.FC<ITechnologyImage> = (props) => {
  return (
    <div className="pos-rel">
      <Mask src="img/icons/mask.svg" />
      <Img src={props.src} alt={props.alt} style={props.style} />
    </div>
  );
};

const Technology: React.FC = () => {
  return (
    <Main id="#technology" className="w-100">
      <Container>
        <H2>Technology</H2>
        <div className="flex wrap">
          <Card>
            <Image src="/img/technology/3d.png" alt="3D" />
            <H3>3D</H3>
            <p>Focused to provide various 3D features</p>
          </Card>
          <Card>
            <Image src="/img/technology/rust.png" alt="rustacean" />
            <H3>Rust</H3>
            <p>Writen in <a href="https://rust-lang.org">Rust</a> to be safe and scalable</p>
          </Card>
          <Card>
            <Image src="/img/technology/ecs.png" alt="ECS" />
            <H3>ECS</H3>
            <p>Follows Entity Component System programming pattern</p>
          </Card>
          <Card>
            <Image src="/img/technology/wgpu.png" alt="wgpu" style={{ top: 10 }} />
            <H3>WGPU</H3>
            <p>Uses <a href="https://wgpu.rs">WGPU</a> as Renderer</p>
          </Card>
        </div>
      </Container>
    </Main>
  );
};

export default Technology;

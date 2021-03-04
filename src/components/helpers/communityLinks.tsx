import dotrix from "src/interfaces/dotrix";
import IStyled from "src/interfaces/styled";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

const Ul = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-right: ${theme.padding.x1};
  }
`;

interface IImgProps {
  size?: string,
  variant: "light" | "dark";
}

const Img = styled.img<IImgProps>`
  width: ${props => props.size || "32px"};
  height: ${props => props.size || "32px"};
  ${props => props.variant === "light" ? "filter: invert(1);" : ""};
  &:hover {
    /* https://css-tricks.com/the-many-ways-to-change-an-svg-fill-on-hover-and-when-to-use-them/ */
    filter: invert(0.4) sepia(1) saturate(20) hue-rotate(186deg);
  }
`;

interface IProps extends IStyled, IImgProps {
  className?: string,
}

const links = Object.entries(dotrix.links.community);
links.unshift(["lowenware", dotrix.links.lowenware]);

const CommunityLinks: React.FC<IProps> = (props) => {
  return (
    <Ul className={props.className} style={props.style}>
      {links.map(([key, link]) => {
            return (
              <Li key={key}>
                <Link href={link.href} prefetch={false}>
                  <a title={link.title}>
                    <Img src={link.icon?.src}
                      alt={link.icon?.alt}
                      size={props.size}
                      variant={props.variant}
                    />
                  </a>
                </Link>
              </Li>
            );
          })}
    </Ul>
  );
};

export default CommunityLinks;

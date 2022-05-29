import {CSSProperties} from "react";

const paginatorButtonStyle: CSSProperties = {
  padding: "8px 15px",
  textAlign: "center",
  borderRadius: 4,
  color: "#88919B",
  fontWeight: 700,
  margin: 2,
};
const currentPaginatorButton = {
  ...paginatorButtonStyle,

  background: "#11131A",
  color: "#0FB7FF",
};
export enum PaginatorButtonType {
  Normal,
  PrevPage,
  NextPage,
  Placeholder,
}
interface PaginatorButtonProps {
  linkType: PaginatorButtonType,
  pageNumber?: number,
  link: string,
  isCurrent: boolean,
}
export const PaginatorButton: React.FC<PaginatorButtonProps> = ({
  linkType,
  pageNumber,
  link,
  isCurrent,
}) => {
  if (pageNumber) {
    if (linkType == PaginatorButtonType.PrevPage) {
      return (
        <a className="hidden sm:block" href={link} style={paginatorButtonStyle}>
          {"<"}
        </a>
      );
    }
    if (linkType == PaginatorButtonType.Normal) {
      return (
        <a
          href={link}
          style={isCurrent ? currentPaginatorButton : paginatorButtonStyle}
        >
          {pageNumber}
        </a>
      );
    } else if (linkType == PaginatorButtonType.NextPage) {
      return (
        <a className="hidden sm:block" href={link} style={paginatorButtonStyle}>
          {">"}
        </a>
      );
    }
  }
  if (linkType == PaginatorButtonType.Placeholder) {
    return <span className="text-gray">{"..."}</span>;
  }
  return null;
};

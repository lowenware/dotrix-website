import classNames from "classnames";

import {Button} from "~/components/button";

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
  if (!pageNumber) {
    if (linkType == PaginatorButtonType.Placeholder) {
      return <span className="text-white">{"..."}</span>;
    }
  }

  const [buttonText, className] = (() => {
    switch (linkType) {
    case PaginatorButtonType.PrevPage: return [<>&lt;</>, "text-medium hidden sm:flex"];
    case PaginatorButtonType.NextPage: return [<>&gt;</>, "text-medium hidden sm:flex"];
    default: return [`${pageNumber}`, "text-small"];
    }
  })();

  return (
    <Button
      variant={isCurrent ? "primary" : "outline"}
      href={link}
      className={classNames(className, "py-0 px-0 w-10 h-10")}
    >
      {buttonText}
    </Button>
  );

};

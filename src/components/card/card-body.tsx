import classNames from "classnames";
import {ReactNode} from "react";

interface CardProps {
  className?: string,
  children: ReactNode,
}

export const CardBody: React.FC<CardProps> = ({className, children}) => {
  return (
    <>
      <div
        className={classNames(
          "space-y-24 p-24",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

import classNames from "classnames";
import {ReactNode} from "react";

interface CardProps {
  className?: string,
  children: ReactNode,
}

export const Card: React.FC<CardProps> = ({className, children}) => {
  return (
    <>
      <div
        className={classNames(
          "bg-black min-w-200 min-h-full flex flex-col",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

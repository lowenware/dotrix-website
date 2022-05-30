import classNames from "classnames";
import {ReactNode} from "react";

import {Button} from "~/components/button";

import {Card} from "./card";

interface CommunityCardProps {
  className?: string;
  title?: string,
  icon?: ReactNode;
  children?: ReactNode;
  link: string;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  className,
  title,
  icon,
  children,
  link,
}) => {
  return (
    <>
      <Card className={classNames("p-32", className)}>
        <p className="text-white text-24 self-center font-bold mb-32">
          {title}
        </p>
        <div className="self-center mt-64 scale-400"> {icon}</div>
        <div className="text-white text-14 self-center text-left mt-64 mb-16">
          {children}
        </div>
          <Button className=""  href={""}>
            Open {title}
          </Button>
      </Card>
    </>
  );
};

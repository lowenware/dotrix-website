import classNames from "classnames";
import {ReactNode} from "react";

import {Button} from "~/components/button";

import {Card} from "./card";
import {CardBody} from "./cardBody";
import {CardTitle} from "./cardTitle";

interface CommunityCardProps {
  className?: string,
  title?: string,
  icon?: ReactNode,
  children?: ReactNode,
  link: string,
  buttonText: string,
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  className,
  title,
  icon,
  children,
  link,
  buttonText
}) => {
  return (
    <Card className={classNames("", className)}>
      <CardBody className="flex flex-col text-center space-y-64">
      <CardTitle title={title}/>
      <div className="w-5 h-5 m-auto scale-400 self-center">{icon}</div>
      <p className="text-small self-center text-left">
        {children}
      </p>
      <Button href={link}>
        {buttonText}
      </Button>
      </CardBody>
    </Card>
  );
};

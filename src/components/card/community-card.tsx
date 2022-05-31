import classNames from "classnames";
import {ReactNode} from "react";

import {Button} from "~/components/button";

import {Card} from "./card";
import {CardBody} from "./card-body";
import {CardTitle} from "./card-title";

interface CommunityCardProps {
  className?: string,
  title: string,
  icon?: ReactNode,
  summary?: string,
  link: string,
  buttonText: string,
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  className,
  title,
  icon,
  summary,
  link,
  buttonText
}) => {
  return (
    <Card className={classNames("", className)}>
      <CardBody className="flex flex-col text-center space-y-64 h-full">
        <CardTitle title={title}/>
        <div className="flex items-center justify-center h-80">
          <span className="scale-400">{icon}</span>
        </div>
        <p className="text-left flex-grow">
          {summary}
        </p>
        <Button href={link}>
          {buttonText}
        </Button>
      </CardBody>
    </Card>
  );
};

import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import { Card } from "./Card";
interface CommunityCardProps {
  className?: string;
  title?: string;
  icon?: ReactNode;
  description?: string;
  link: string;
}
export const CommunityCard: React.FC<CommunityCardProps> = ({
  className,
  title,
  icon,
  description,
  link,
}) => {
  return (
    <>
      <Card className={classNames("p-32", className)}>
        <p className="text-white text-24 self-center font-bold mb-32">
          {title}
        </p>
        <div className="self-center mt-64 scale-400"> {icon}</div>
        <p className="text-white text-14 self-center text-left mt-64">
          {description}
        </p>
        <Link href={link}>
          <div className="mt-64 flex text-white md:text-24 text-center px-4 py-16 text-18 uppercase bg-blue-light font-bold justify-center cursor-pointer rounded-xl hover:bg-black-200 hover:bg-opacity-25 duration-500">
            Open {title}
          </div>
        </Link>
      </Card>
    </>
  );
};

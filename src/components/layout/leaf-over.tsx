import classNames from "classnames";
import Link from "next/link";

export interface Leaf {
  url: string,
  title: string,
}

interface LeafOverProps {
  className?: string,
  prev: Leaf | null,
  next: Leaf | null,
};

export const LeafOver: React.FC<LeafOverProps> = ({className, prev, next}) => {
  return (
    <div className={classNames("flex text-medium justify-between", className)}>
      {prev && (
        <div className="flex flex-grow">
          <div className="flex flex-col">
            <span className="flex items-center uppercase text-blue-dark text-small">
              <span>&lsaquo; Back to</span>
            </span>
            <Link href={prev.url}>
              <a className="text-blue hover:text-white">
                {prev.title}
              </a>
            </Link>
          </div>
        </div>
      )}
      {next && (
        <div className="flex flex-grow justify-end">
          <div className="flex flex-col justify-end items-end">
            <span className="flex items-center uppercase text-blue-dark text-small">
              <span>Read next &rsaquo;</span>
            </span>
            <Link href={next.url}>
              <a className="text-blue hover:text-white">
                {next.title}
              </a>
            </Link>
          </div>
        </div>
      )
      }
    </div>
  );
};


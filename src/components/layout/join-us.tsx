import classNames from "classnames";
import Link from "next/link";

import {Logo} from "~/assets";
import {Button} from "~/components/button";

interface JoinUsProps {
  className?: string,
}

export const JoinUs: React.FC<JoinUsProps> = ({className}) => {
  return (
    <section
      className={classNames(
        "w-full bg-dark mh-200 sm:p-32 flex items-center justify-between flex-col lg:flex-row ",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row">
        <Button href="/" variant="secondary">
          Join Us
        </Button>

        <span className="text-white text-small sm:text-large mb-16 lg:mb-0 lg:text-large self-center ml-16">
          Become a sponsor or contributor to enlarge your experience
        </span>
      </div>
      <div className="flex gap-16 mb-16 lg:mb-0">
        <Link href={"/"}>
          <span className="cursor-pointer">
            <Logo.Github />
          </span>
        </Link>
        <Link href={"/"}>
          <span className="cursor-pointer">
            <Logo.Patreon />
          </span>
        </Link>
        <Link href={"/"}>
          <span className="cursor-pointer">
            <Logo.Discord />
          </span>
        </Link>
        <Link href={"/"}>
          <span className="cursor-pointer">
            <Logo.Youtube />
          </span>
        </Link>
        <Link href={"/"}>
          <span className="cursor-pointer">
            <Logo.Twitter />
          </span>
        </Link>
      </div>
    </section>
  );
};

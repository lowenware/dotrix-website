import classNames from "classnames";
import { Button } from "components/button";
import Discord from "icons/logo-discord.svg";
import GitHub from "icons/logo-github.svg";
import Patreon from "icons/logo-patreon.svg";
import Twitter from "icons/logo-twitter.svg";
import YouTube from "icons/logo-youtube.svg";
import Link from "next/link";

interface JoinUsProps {
  className?: string,
}

export const JoinUs: React.FC<JoinUsProps> = ({ className }) => {
  return (
    <section
      className={classNames(
        "w-full bg-black sm:p-32 flex items-center justify-between flex-col lg:flex-row",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row">
        <Button href="/" variant="secondary" className="mb-16 mt-16 sm:mb-0">
          JOIN US
        </Button>

        <span className="text-white text-12 sm:text-18 mb-16 lg:mb-0 lg:text-24 self-center ml-16">
          Become a sponsor or contributor to enlarge your experience
        </span>
      </div>
      <div className="flex gap-16 mb-16 lg:mb-0">
        <Link href={"/"}>
          <span>
            <GitHub className="cursor-pointer" />
          </span>
        </Link>
        <Link href={"/"}>
          <span>
            <Patreon className="cursor-pointer" />
          </span>
        </Link>
        <Link href={"/"}>
          <span>
            <Discord className="cursor-pointer" />
          </span>
        </Link>
        <Link href={"/"}>
          <span>
            <YouTube className="cursor-pointer" />
          </span>
        </Link>
        <Link href={"/"}>
          <span>
            <Twitter className="cursor-pointer" />
          </span>
        </Link>
      </div>
    </section>
  );
};

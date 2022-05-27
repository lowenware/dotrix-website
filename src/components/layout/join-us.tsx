import Link from "next/link";
import GitHub from "icons/logo-github.svg";
import Patreon from "icons/logo-patreon.svg";
import Discord from "icons/logo-discord.svg";
import Twitter from "icons/logo-twitter.svg";
import YouTube from "icons/logo-youtube.svg";
import classNames from "classnames";

interface JoinUsProps {
  className?: string;
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
        <Link href={"/community"}>
          <span
            className="flex
            px-16 py-4 scale-150 sm:scale-100
            justify-center self-center mt-32 lg:my-0 mb-32 text-center
            w-120 sm:w-auto sm:px-32 sm:py-16 lg:px-64 lg:py-16 text-white
            font-bold text-18 sm:text-24 bg-green rounded-md hover:bg-white
            hover:bg-opacity-30 duration-500 cursor-pointer"
          >
            JOIN US
          </span>
        </Link>
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

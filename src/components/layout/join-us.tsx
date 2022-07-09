import classNames from "classnames";
import Link from "next/link";

import {Logo} from "~/assets";
import {Button} from "~/components/button";
import {site} from "~/config";
import {SocialMeta} from "~/modules/content-manager";

interface JoinUsProps {
  className?: string,
  social: SocialMeta[],
}

export const JoinUs: React.FC<JoinUsProps> = ({className, social}) => {
  return (
    <section
      className={classNames(
        "flex flex-col items-center justify-between w-full bg-dark drop-shadow p-24",
        "space-y-24 lg:space-y-0 space-x-0 lg:space-x-24 space-p-24 lg:flex-row",
        className
      )}
    >
      <Button
        className=""
        href={`/${site.community.slug}`} variant="secondary">Join Us</Button>

      <div
        className="flex-grow text-white text-medium text-center lg:text-left sm:text-large"
      >
        Become a sponsor or contributor to enlarge your experience
      </div>

      <div className="flex items-center space-x-24">
        {social.map(link => (
          <Link key={link.slug} href={link.url}>
            <span className="cursor-pointer">
              {Logo.from(link.label)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

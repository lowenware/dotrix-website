import classNames from "classnames";
import Link from "next/link";

import {Logo} from "~/assets";
import {Button} from "~/components/button";
import cfg from "~/modules/config";
import {SocialMeta} from "~/modules/content-manager";

interface JoinUsProps {
  className?: string,
  social: SocialMeta[],
}

export const JoinUs: React.FC<JoinUsProps> = ({className, social}) => {
  return (
    <section
      className={classNames(
        "flex flex-col items-center justify-between w-full bg-dark drop-shadow mh-200",
        "sm:p-32 lg:flex-row",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row space-x-24">
        <Button href={`/${cfg.community.slug}`} variant="secondary">
          Join Us
        </Button>

        <span
          className="text-white text-small sm:text-large mb-16 lg:mb-0 lg:text-large self-center"
        >
          Become a sponsor or contributor to enlarge your experience
        </span>
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

import Link from "next/link";

import {Logo} from "~/assets";
import cfg from "~/modules/config";
import {SocialMeta} from "~/modules/content-manager";

import {JoinUs} from "./join-us";

interface FooterProps {
  slug: string[],
  social: SocialMeta[],
}

export const Footer: React.FC<FooterProps> = ({slug, social}) => {
  const isCommunityPage = slug[0] === cfg.community.slug;
  return (
    <div id="footer">
      {isCommunityPage ? (
        <div className="bg-dark drop-shadow text-large text-white text-center p-2"></div>
      ) : (
        <JoinUs social={social}/>)
      }
      <div className="flex sm:flex-row flex-col text-blue-dark sm:h-140 min-h-min
        sm:justify-between items-center"
      >
        <div className="flex flex-grow flex-col my-auto
          sm:order-1 sm:pl-32 md:text-left text-center"
        >
          &copy; 2022 Löwenware s.r.o. All rights reserved.
        </div>

        <div
          className="flex flex-col flex-grow my-8 space-x-8 text-center
            justify-center
            sm:order-3 lg:flex-row sm:my-0 lg:justify-end
            sm:pr-32 lg:text-left sm:text-right"
        >
          <span>Build #{process.env.BUILD_ID}</span>
          <span>|</span>
          <Link href="/license"><a>License</a></Link>
          <span>|</span>
          <Link href="/privacy"><a>Privacy</a></Link>
        </div>

        <div
          className="flex flex-grow items-center justify-center my-16
            sm:m-0 sm:order-2"
        >
          <Link href="https://lowenware.com/"><a><Logo.Lowenware /></a></Link>
        </div>
      </div>
    </div>
  );
};

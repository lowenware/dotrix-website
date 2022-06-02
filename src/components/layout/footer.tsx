import Link from "next/link";

import {Logo} from "~/assets";
import {site} from "~/config";
import {SocialMeta} from "~/modules/content-manager";

import {JoinUs} from "./join-us";

interface FooterProps {
  slug: string,
  social: SocialMeta[],
}

export const Footer: React.FC<FooterProps> = ({slug, social}) => {
  const isCommunityPage = slug === site.community.slug;
  return (
    <div id="footer">
      {isCommunityPage ? (
        <div className="bg-dark drop-shadow text-large text-white text-center p-2"></div>
      ) : (
        <JoinUs social={social}/>)
      }
      <div className="flex md:flex-row flex-col text-blue-dark p-24
        md:justify-between items-center"
      >
        <div className="flex flex-grow flex-col my-auto
          md:order-1 md:text-left text-center"
        >
          &copy; 2022 Löwenware s.r.o. All rights reserved.
        </div>

        <div
          className="flex flex-grow my-8 space-x-8 text-center justify-center
            md:order-3 lg:flex-row sm:my-0 lg:justify-end lg:text-left md:text-right"
        >
          <span>Build #{process.env.BUILD_ID}</span>
          <span>|</span>
          <Link href="/license"><a>License</a></Link>
          <span>|</span>
          <Link href="/privacy"><a>Privacy</a></Link>
        </div>

        <div
          className="flex flex-grow items-center justify-center my-16 md:m-0 md:order-2"
        >
          <Link href="https://lowenware.com/"><a><Logo.Lowenware /></a></Link>
        </div>
      </div>
    </div>
  );
};

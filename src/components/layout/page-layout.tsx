import classNames from "classnames";
import {NextPage} from "next";
import {ReactNode} from "react";

import {Footer} from "~/components/layout/footer";
import {Header} from "~/components/layout/header";
import {SocialMeta, StaticPageMeta} from "~/modules/content-manager";


interface PageProps {
  className?: string,
  children: ReactNode,
  slug: string[],
  menu: StaticPageMeta[],
  social: SocialMeta[],
}

export const PageLayout: NextPage<PageProps> = ({
  className,
  children,
  slug,
  menu,
  social,
}) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Header slug={slug} menu={menu} />
        <div className={classNames(className, "flex-grow")}>
          {children}
        </div>
        <Footer slug={slug} social={social} />
      </div>
    </>
  );
};

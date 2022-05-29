import {NextPage} from "next";
import {ReactNode} from "react";

import {PageEnum} from "~/utils/pages";

import {Footer} from "./footer";
import {Header} from "./header";


interface PageProps {
  children: ReactNode,
  currentPage: PageEnum,
}

export const PageLayout: NextPage<PageProps> = ({
  children,
  currentPage,
}) => {
  return (
    <>
      <Header currentPage={currentPage} />
      <div className="pt-80">
        {children}
      </div>
      <Footer />
    </>
  );
};

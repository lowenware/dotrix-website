import {NextPage} from "next";
import {ReactNode} from "react";

import {PageEnum} from "~/utils/pages";

import {Footer} from "./footer";
import {Header} from "./header";


interface PageProps {
  children: ReactNode,
  currentPage?: PageEnum,
}

export const PageLayout: NextPage<PageProps> = ({
  children,
  currentPage,
}) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Header currentPage={currentPage} />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

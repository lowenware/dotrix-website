import { NextPage } from "next";
import { ReactNode } from "react";
import { PageEnum } from "utils/pages";

import { Footer } from "./footer";
import { Header } from "./header";
import { JoinUs } from "./join-us";

interface PageProps {
  joinUsComponent?: boolean,
  children: ReactNode,
  currentPage: PageEnum,
}

export const PageLayout: NextPage<PageProps> = ({
  joinUsComponent = true,
  children,
  currentPage,
}) => {
  return (
    <>
      <Header currentPage={currentPage} />
      {children}
      {joinUsComponent && <JoinUs />}
      <Footer />
    </>
  );
};

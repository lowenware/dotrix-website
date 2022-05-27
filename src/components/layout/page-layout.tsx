import { Footer } from "./footer";
import { Header } from "./header";
import { NextPage } from "next";
import { ReactNode } from "react";
import { JoinUs } from "./join-us";

interface PageProps {
  joinUsComponent?: boolean;
  children: ReactNode;
  currentPage: string;
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

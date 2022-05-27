import { Footer } from "./footer";
import { Header } from "./header";
import { NextPage } from "next";
import { ReactNode } from "react";
import { JoinUs } from "./join-us";

interface PageProps {
  joinUsComponent?: boolean;
  children: ReactNode;
}

export const PageLayout: NextPage<PageProps> = ({
  joinUsComponent = true,
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      {joinUsComponent && <JoinUs />}
      <Footer />
    </>
  );
};

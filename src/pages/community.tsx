import {NextPage} from "next";
import Head from "next/head";

import {Logo} from "~/assets";
import {CommunityCard} from "~/components/card";
import {PageLayout, Slide} from "~/components/layout";
import {PAGES} from "~/utils/pages";

const Community: NextPage = () => {
  return (
    <>
      <Head>
        <title>{PAGES.COMMUNITY.title}</title>
      </Head>
      <PageLayout currentPage="COMMUNITY">
      <Slide image="/images/low-poly-mountain.png" size={"small"}>
            <p className="text-white text-48 font-bold">
              Community
            </p>
            </Slide>
        <section className="w-full relative z-40">
          <div className="p-32 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 mt-48">
          <CommunityCard
              className=""
              title="Contribute"
              icon={<Logo.Github />}
              link=""
              buttonText={"OPEN GITHUB"}>
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>
          <CommunityCard
              className=""
              title="Follow"
              icon={<Logo.Twitter />}
              link=""
              buttonText={"OPEN FEED"}>
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>
          <CommunityCard
              className=""
              title="Donate"
              icon={<Logo.Patreon />}
              link=""
              buttonText={"BECOME A PATRON"}>
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>
          <CommunityCard
              className=""
              title="Watch"
              icon={<Logo.Youtube />}
              link=""
              buttonText={"WATCH YOUTUBE"} >
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>

          <CommunityCard
          title="Communicate"
          icon={<Logo.Discord />}
          link=""
          buttonText={"DISCORD"}>
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>
          </div>
        </section>
      </PageLayout>
    </>
  );
};
export default Community;

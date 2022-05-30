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
        <section className="w-full relative z-50">
          <div className="p-32 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 -mt-32">
          <CommunityCard
            className=""
            title="GitHub"
            icon={<Logo.Github />}
            link=""
          >
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>
          <CommunityCard
            className=""
            title="Twitter"
            icon={<Logo.Twitter />}
            link=""
          >
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>
          <CommunityCard
            className=""
            title="Patreon"
            icon={<Logo.Patreon />}
            link=""
          >
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>
          <CommunityCard
            className=""
            title="YouTube"
            icon={<Logo.Youtube />}
            link=""
          >
            Ask a question, share your success, discuss anything about 3D
            development with our community
          </CommunityCard>

          <CommunityCard title="Discord" icon={<Logo.Discord />} link="">
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

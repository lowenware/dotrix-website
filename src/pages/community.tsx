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
        <Slide image="/images/low-poly-mountain.png" size={"small"} className="mt-80">
          <h1>Community</h1>
        </Slide>
        <section className="w-full relative z-40 -mt-32 pb-32 px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32">
            <CommunityCard
              className=""
              title="Contribute"
              icon={<Logo.Github />}
              link=""
              buttonText={"Open GitHub"}
            >
              Ask a question, share your success, discuss anything about 3D
              development with our community
            </CommunityCard>
            <CommunityCard
              className=""
              title="Follow"
              icon={<Logo.Twitter />}
              link=""
              buttonText={"Open Feed"}
            >
              Ask a question, share your success, discuss anything about 3D
              development with our community
            </CommunityCard>
            <CommunityCard
              className=""
              title="Donate"
              icon={<Logo.Patreon />}
              link=""
              buttonText={"Become a Patron"}
            >
              Ask a question, share your success, discuss anything about 3D
              development with our community
            </CommunityCard>
            <CommunityCard
              className=""
              title="Watch"
              icon={<Logo.Youtube />}
              link=""
              buttonText={"Watch YoutTube"}
            >
              Ask a question, share your success, discuss anything about 3D
              development with our community
            </CommunityCard>

            <CommunityCard
              title="Communicate"
              icon={<Logo.Discord />}
              link=""
              buttonText={"Join Discord"}
            >
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

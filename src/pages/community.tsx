import {NextPage} from "next";
import Head from "next/head";

import {Logo} from "~/assets";
import {CommunityCard} from "~/components/card";
import {PageLayout} from "~/components/layout";
import {PAGES} from "~/utils/pages";

const Community: NextPage = () => {
  return (
    <>
      <Head>
        <title>{PAGES.COMMUNITY.title}</title>
      </Head>
      <PageLayout currentPage="COMMUNITY">
        <div
          className={
            "home__image w-full h-60vh sm:h-screen lg:h-40vh bg-fixed items-center justify-center bg-no-repeat lg:bg-contain bg-cover bg-center md:bg-top lg:bg-top"
          }
        >
          <div
            className={
              "bg-opacity-70 flex flex-col bg-black-100 h-60vh sm:h-screen lg:h-40vh bg-fixed w-full"
            }
          >
            <p className="text-white text-48 lg:text-72 self-center my-auto">
              Community
            </p>
          </div>
        </div>
        <section
          className="w-full px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32"
        >
          <CommunityCard
            className="-top-32 relative"
            title="GitHub"
            icon={<Logo.Github />}
            link=""
          >
            Ask a question, share your success, discuss anything
            about 3D development with our community
          </CommunityCard>
          <CommunityCard
            className="-top-32 relative"
            title="Twitter"
            icon={<Logo.Twitter />}
            link=""
          >
            Ask a question, share your success, discuss anything
            about 3D development with our community
          </CommunityCard>
          <CommunityCard
            className="-top-32 relative"
            title="Patreon"
            icon={<Logo.Patreon />}
            link=""
          >
            Ask a question, share your success, discuss anything
            about 3D development with our community
          </CommunityCard>
          <CommunityCard
            className="-top-32 relative"
            title="YouTube"
            icon={<Logo.Youtube />}
            link=""
          >
            Ask a question, share your success, discuss anything
            about 3D development with our community
          </CommunityCard>

          <CommunityCard
            title="Discord"
            icon={<Logo.Discord />}
            link=""
          >
            Ask a question, share your success, discuss anything
            about 3D development with our community
          </CommunityCard>
        </section>
      </PageLayout>
    </>
  );
};
export default Community;

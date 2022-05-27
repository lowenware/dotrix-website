import { CommunityCard, PageLayout } from "components";
import { NextPage } from "next";
import GitHub from "icons/logo-github.svg";
import Patreon from "icons/logo-patreon.svg";
import Discord from "icons/logo-discord.svg";
import Twitter from "icons/logo-twitter.svg";
import YouTube from "icons/logo-youtube.svg";

interface CommunityProps {}

const Community: NextPage<CommunityProps> = () => {
  return (
    <>
      <PageLayout currentPage="COMMUNITY" joinUsComponent={false}>
        <div className="home__image w-full h-40vh bg-fixed items-center justify-center bg-no-repeat lg:bg-contain bg-cover bg-center md:bg-top lg:bg-top">
          <div className="bg-opacity-70 flex flex-col bg-black-100 h-40vh bg-fixed w-full">
            <p className="text-white text-48 lg:text-72 self-center my-auto">
              Community
            </p>
          </div>
        </div>
        <section className="bg-black-800 w-full px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-32 ">
          <CommunityCard
            className="-top-32 relative"
            title="GitHub"
            icon={<GitHub />}
            description="Ask a question, share your success, discuss anything about 3D development with our community"
            link=""
          />
          <CommunityCard
            className="-top-32 relative"
            title="Twitter"
            icon={<Twitter />}
            description="Ask a question, share your success, discuss anything about 3D development with our community"
            link=""
          />
          <CommunityCard
            className="-top-32 relative"
            title="Patreon"
            icon={<Patreon />}
            description="Ask a question, share your success, discuss anything about 3D development with our community"
            link=""
          />
          <CommunityCard
            className="-top-32 relative"
            title="YouTube"
            icon={<YouTube />}
            description="Ask a question, share your success, discuss anything about 3D development with our community"
            link=""
          />

          <CommunityCard
            title="Discord"
            icon={<Discord />}
            description="Ask a question, share your success, discuss anything about 3D development with our community"
            link=""
          />
        </section>
      </PageLayout>
    </>
  );
};
export default Community;

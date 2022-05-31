import {NextPage} from "next";
import Head from "next/head";

import {Logo} from "~/assets";
import {CommunityCard} from "~/components/card";
import {PageLayout, Slide} from "~/components/layout";
import {PAGES} from "~/utils/pages";

const Community: NextPage = () => {
  const CommunityCardList = [
    {
      icon: <Logo.Github />,
      title: "Contribute",
      link: "",
      buttonText: "Open GitHub",
      summary:
      "Join the development process, contribute to the codebase, share your ideas and report bugs",
    },
    {
      icon: <Logo.Twitter />,
      title: "Follow",
      link: "",
      buttonText: "Open Feed",
      summary:
      "Get updates about releases and interesting projects powered by Dotrix",
    },
    {
      icon: <Logo.Patreon />,
      title: "Donate",
      link: "",
      buttonText: "Become a Patron",
      summary:
      "Your sponsorship helps us to allocate more time on Dotrix development to deliver more features and improve our engine",
    },
    {
      icon: <Logo.Youtube />,
      title: "Watch",
      link: "",
      buttonText: "Watch YoutTube",
      summary:
      "On our YouTube channel you will find Dotrix tutorials and demos, that may help you to learn more about the engine",
    },
    {
      icon: <Logo.Discord />,
      title: "Communicate",
      link: "",
      buttonText: "Join Discord",
      summary:
      "Ask a question, share your success, discuss anything about 3D development with our community",
    },
  ];
  return (
    <>
      <Head>
        <title>{PAGES.COMMUNITY.title}</title>
      </Head>
      <PageLayout currentPage="COMMUNITY">
        <Slide
          image="/images/low-poly-mountain.png"
          size={"small"}
          className="mt-80"
        >
          <h1>Community</h1>
        </Slide>
        <section className="w-full relative z-40 -mt-32 pb-32 px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32">
            {CommunityCardList.map((card, key) => {
              return (
                <CommunityCard
                  key={key}
                  link={card.link}
                  buttonText={card.buttonText}
                  title={card.title}
                  summary={card.summary}
                  icon={card.icon}
                />
              );
            })}
          </div>
        </section>
      </PageLayout>
    </>
  );
};
export default Community;

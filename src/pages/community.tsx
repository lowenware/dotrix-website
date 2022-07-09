import {NextPage} from "next";
import Head from "next/head";

import {Logo} from "~/assets";
import {CommunityCard} from "~/components/card";
import {PageLayout, Slide} from "~/components/layout";
import {site} from "~/config";
import {ContentManager, PageProps, StaticPageMeta} from "~/modules/content-manager";

const CommunityPage: NextPage<PageProps<StaticPageMeta>> = ({menu, social, data}) => {
  const root = data;

  return (
    <>
      <Head>
        <title>{root.title} - {site.name}</title>
      </Head>
      <PageLayout slug={root.slug} menu={menu} social={social}>
        <Slide
          image="/images/low-poly-mountain.png"
          size="small"
          className="mt-80"
        >
          <h1>{root.title}</h1>
        </Slide>
        <div className="w-full relative z-40 -mt-32 pb-32 px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32">
            {social.map((card, key) => {
              return (
                <CommunityCard
                  key={key}
                  link={card.url}
                  buttonText={card.action}
                  title={card.title}
                  summary={card.content}
                  icon={Logo.from(card.label)}
                />
              );
            })}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const manager = new ContentManager();
  return {
    props: manager.getPageProps(manager.page("community")),
  };
};

export default CommunityPage;

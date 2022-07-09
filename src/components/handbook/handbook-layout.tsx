import {NextPage} from "next";
import Link from "next/link";

import {Card, CardBody, CardTitle} from "~/components/card";
import {LeafOver, Markdown,PageLayout} from "~/components/layout";
import {site} from "~/config";
import {ContentManager, SocialMeta, StaticPageMeta} from "~/modules/content-manager";
import {HandbookProps} from "~/modules/handbook";

interface HandbookLayoutProps {
  handbook: HandbookProps,
  social: SocialMeta[],
  menu: StaticPageMeta[],
}

export const HandbookLayout: NextPage<HandbookLayoutProps> = ({handbook, menu, social}) => {
  const root = ContentManager.root(menu, site.handbook.slug);
  const getLink = (slug: string[]) => `${root.url}/${slug.join("/")}`;
  const {chapters, page, prev, next} = handbook;

  const getLinkClass = (slug: string[]) => {
    const classes = [];
    const pagePath = page.meta.slug.join("/");
    const linkPath = slug.join("/");
    (pagePath === linkPath) && classes.push("active");
    pagePath.startsWith(linkPath) && classes.push("text-blue");

    return classes.length > 0 ? classes.join(" ") : undefined;
  };

  return (
    <PageLayout className="pt-80" slug={site.handbook.slug} menu={menu} social={social}>
      <div
        className="flex flex-col lg:flex-row space-y-24 lg:space-y-0 space-x-0
          lg:space-x-32 p-32 lg:items-start"
      >
        <Card>
          <CardBody className="space-y-24">
            <CardTitle title="Table of Contents" />
            <ul className="aside text-medium">
              {chapters.map((chapter, key) => {
                const chapterClass = getLinkClass(chapter.meta.slug);

                return (
                  <li key={key} className={chapterClass}>
                    <Link href={getLink(chapter.meta.slug)} >
                      <a className={chapter.meta.draft ? "text-blue-dark" : undefined}>
                        {chapter.meta.title}
                      </a>
                    </Link>

                    {chapterClass && chapter.sections.length > 0 && (
                      <ul className="ml-24 my-8">
                        {chapter.sections.map((section, key) => (
                          <li key={key} className={getLinkClass(section.slug)}>
                            <Link href={getLink(section.slug)}>
                              <a className={section.draft ? "text-blue-dark" : undefined}>
                                {section.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </CardBody>
        </Card>
        <div className="flex-grow">
          <div className="max-w-screen-lg">

            {page.meta.draft ? (
              <>
                <h1>{page.meta.title}</h1>
                <blockquote>
                  The document is planned, but has not been prepared yet.
                </blockquote>
              </>
            ) : (
              <Markdown
                tag="main"
                patchHtml={html => `<h1>${page.meta.title}</h1>${html}`}
                content={page.content}
              />
            )}

            <LeafOver className="my-32"
              prev={prev && ({
                url: `${root.url}/${prev.slug.join("/")}`, title: prev.title
              })}
              next={next && ({
                url: `${root.url}/${next.slug.join("/")}`, title: next.title
              })}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

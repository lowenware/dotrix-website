import md from "markdown-it";
import {NextPage} from "next";
import Link from "next/link";

import {Card, CardBody, CardTitle} from "~/components/card";
import {PageLayout} from "~/components/layout";
import {HANDBOOK_URL_ROOT, HandbookProps} from "~/utils/handbook";

export const HandbookLayout: NextPage<HandbookProps> = ({menu, page}) => {
  const getLink = (slug: string[]) => `${HANDBOOK_URL_ROOT}/${slug.join("/")}`;

  const getLinkClass = (slug: string[]) => {
    const classes = [];
    const pagePath = page.meta.slug.join("/");
    const linkPath = slug.join("/");
    (pagePath === linkPath) && classes.push("active");
    pagePath.startsWith(linkPath) && classes.push("text-blue");

    return classes.length > 0 ? classes.join(" ") : undefined;
  };

  return (
    <PageLayout currentPage="HANDBOOK" className="pt-80">
      <div className="flex space-x-32 p-32 items-start">
        <Card>
          <CardBody className="space-y-24">
            <CardTitle title="Table of Contents" />
            <ul className="menu__chapter text-medium">
              {menu.map((chapter, key) => {
                const chapterClass = getLinkClass(chapter.meta.slug);

                return (
                  <li key={key} className={chapterClass}>
                    <Link href={getLink(chapter.meta.slug)} >
                      <a>{chapter.meta.title}</a>
                    </Link>

                    {chapterClass && chapter.sections.length > 0 && (
                      <ul className="menu__section ml-24 my-8">
                        {chapter.sections.map((section, key) => (
                          <li key={key} className={getLinkClass(section.slug)}>
                            <Link href={getLink(section.slug)}>
                              <a>{section.title}</a>
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
        <div className="max-w-screen-lg">
          <main className="w-10/12">
            <h1>{page.meta.title}</h1>
            <div dangerouslySetInnerHTML={{__html: md().render(page.content)}} />
          </main>
        </div>
      </div>
    </PageLayout>
  );
};

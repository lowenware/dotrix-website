import classNames from "classnames";
import md from "markdown-it";
import {NextPage} from "next";
import Link from "next/link";

import {Card, CardBody, CardTitle} from "~/components/card";
import {PageLayout} from "~/components/layout";
import {HANDBOOK_URL_ROOT, HandbookProps} from "~/utils/handbook";

export const HandbookLayout: NextPage<HandbookProps> = ({menu, page}) => {
  const getLink = (slug: string[]) => `${HANDBOOK_URL_ROOT}/${slug.join("/")}`;

  const isActive = (slug: string[]) => {
    const slugsToCompare = slug.length;
    return page.meta.slug.slice(0, slugsToCompare).join(".") === slug.join(".");
  };
//TODO Make active subtitle list when active one link
  return (
    <>
      <PageLayout currentPage="HANDBOOK" className="pt-80">
        <div className="flex space-x-32 p-32 items-start">
          <Card>
            <CardBody className="space-y-8">
              <CardTitle title="HandBook" />
              <ul className="text-white text-medium">
                {menu.map((chapter, key) => (
                  <li
                    key={key}
                    className={classNames(
                      "px-16 py-2 text-large handlink")
                    }
                  >
                    <Link href={getLink(chapter.meta.slug)} >
                          <a href={getLink(chapter.meta.slug)}
                           className={isActive(chapter.meta.slug)
                        ? "active_handlink"
                        : undefined}>
                        {chapter.meta.title}</a>
                    </Link>
                    {chapter.sections && (
                      <ul className="ml-16">
                        {chapter.sections.map((section, key) => (
                          <li
                            key={key}
                            className="py-2"
                          >
                            <Link href={
                              getLink(section.slug)}>
                                <a
                                className={classNames(
                              "menu_sublink text-medium",
                              isActive(section.slug)
                                ? "active_menu_sublink"
                                : undefined
                            )}
                                href={getLink(section.slug)}>
                              {section.title}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <div className="w-3/4 mb-32">
            <main className="w-10/12">
              <h1 className="mb-32">{page.meta.title}</h1>
              <div
                dangerouslySetInnerHTML={{__html: md().render(page.content)}}
              />
            </main>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

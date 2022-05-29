import md from "markdown-it";
import {NextPage} from "next";
import Link from "next/link";

import {Card} from "~/components/card";
import {PageLayout} from "~/components/layout";
import {HANDBOOK_URL_ROOT, HandbookProps} from "~/utils/handbook";

export const HandbookLayout: NextPage<HandbookProps> = ({
  menu,
  page,
}) => {
  const getLink = (slug: string[]) => `${HANDBOOK_URL_ROOT}/${slug.join("/")}`;
  const isActive = (slug: string[]) => page.meta.slug[0] === slug[0];

  return (
    <>
      <PageLayout currentPage="HANDBOOK">
        <div className="flex flex-col sm:flex-row justify-center">
          <Card>
              <div className="text-32 mb-32">Handbook</div>
              <ul className="">
                {menu.map((chapter, key) => (
                  <li key={key} className={isActive(chapter.meta.slug) ? "active" : undefined}>
                    <Link href={getLink(chapter.meta.slug)}>
                      {chapter.meta.title}
                    </Link>
                    {chapter.sections && (
                      <ul className="ml-16">
                        {chapter.sections.map(
                          (section, key) => (
                            <li key={key} className={isActive(section.slug) ? "active" : undefined}>
                              <Link href={getLink(section.slug)}>
                                {section.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

          </Card>
          <div className="w-3/4 mb-32">
            <article className="w-10/12 ml-32">
              <h1 className="text-72 text-white">{page.meta.title}</h1>
              <div
                className="text-black-gray text-14 "
                dangerouslySetInnerHTML={{__html: md().render(page.content)}}
              />
            </article>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

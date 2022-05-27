import classNames from "classnames";
import { PageLayout } from "components";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import md from "markdown-it";
import { HandbookProps, HANDBOOK_URL_ROOT } from "utils/handbook";

export const HandbookLayout: NextPage<HandbookProps> = ({
  menu,
  page,
}) => {
  const getLink = (slug: string[]) => `${HANDBOOK_URL_ROOT}/${slug.join('/')}`;
  const isActive = (slug: string[]) => page.meta.slug[0] === slug[0];

  return (
    <>
      <PageLayout currentPage="HANDBOOK">
        <section className="bg-black-800 flex-col sm:flex-row flex justify-center py-128 px-32 min-h-screen">
          <div className="bg-black w-3/4 sm:w-min min-h-max h-450">
            <div className="text-white text-18 flex flex-col text-left font-bold p-32">
              <p className="text-32 mb-32">Handbook</p>
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
            </div>
          </div>
          <div className="w-3/4 mb-32">
            <article className="w-10/12 ml-32">
              <h1 className="text-72 text-white">{page.meta.title}</h1>
              <div
                className="text-black-gray text-14 "
                dangerouslySetInnerHTML={{ __html: md().render(page.content) }}
              />
            </article>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

import classNames from "classnames";
import { PageLayout } from "components";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { DocsPageProps } from "utils/docs";
import md from "markdown-it";

export const DocsLayout: NextPage<DocsPageProps> = ({
  menu,
  category,
  page,
  meta,
  content,
}) => {
  useEffect(() => {
    document.querySelectorAll(".menu_link").forEach((e) => {
      e.classList.add("active_menu_link");
    });
    document.querySelectorAll(".menu_sublink").forEach((e) => {
      e.classList.add("active_menu_sublink");
    });
  });

  return (
    <>
      <PageLayout currentPage="DOCS">
        <section className="bg-black-800 flex-col sm:flex-row flex justify-center py-128 px-32 min-h-screen">
          <div className="bg-black w-3/4 sm:w-min min-h-max h-450">
            <div className="text-white text-18 flex flex-col text-left font-bold p-32">
              <p className="text-32 mb-32">CONTENTS</p>
              <div className="">
                {menu.categories.map((categories, key) => {
                  const isActiveLink = categories.link === category;
                  return (
                    <div key={key} className="flex flex-col">
                      <Link href={categories.link}>
                        <a
                          className={classNames(
                            "mb-8 menu_link",
                            isActiveLink ? "text-blue-light" : ""
                          )}
                          href=""
                        >
                          {categories.title}
                        </a>
                      </Link>
                      {menu.currentSection &&
                        isActiveLink &&
                        menu.currentSection.map((subsection, subKey) => {
                          const isActiveSubLink = subsection.link === page;
                          return (
                            <Link href={subsection.link} key={subKey}>
                              <li
                                className={classNames(
                                  "menu_sublink mb-10 ml-16 text-14 cursor-pointer",
                                  isActiveSubLink ? "text-blue-light" : ""
                                )}
                              >
                                {subsection.title}
                              </li>
                            </Link>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-3/4 mb-32 overflow-auto">
            <div className="w-10/12 ml-32">
              <h1 className="text-72 text-white">{meta?.title}</h1>
              <div
                className="text-black-gray text-14 "
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
              />
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

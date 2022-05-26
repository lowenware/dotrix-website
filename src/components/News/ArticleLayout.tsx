import classNames from "classnames";
import { Footer, TopBar } from "components";
import Link from "next/link";
import md from "markdown-it";
import { formatDateTime } from "utils/format";
import Left from "icons/left_vector-min.svg";
import Right from "icons/right_vector-min.svg";
import { ArticleData } from "utils/news";

interface ArticleLayoutProps {
  className?: string;
  article: ArticleData;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  className,
  article,
}) => {
  const { meta, content, nextNewsItem, prevNewsItem } = article;
  return (
    <div className="flex flex-col">
      <TopBar />
      <section
        className={classNames("w-full h-screen mt-80 bg-black", className)}
      >
        <div className="mx-auto w-3/4">
          {meta.title && <h1 className="text-56">{meta.title}</h1>}
          <div className="flex justify-between mb-16">
            {meta.date && (
              <span className="text-black-700">
                {formatDateTime(meta.date)}
              </span>
            )}
            {meta.tags && <span className="text-pink">#{meta.tags}</span>}
          </div>
          {/* <Image
            layout="responsive"
            height={150}
            className="w-full h-40.4"
            alt="mountains"
          /> */}
          {content && (
            <div
              className="text-black-gray text-14"
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            />
          )}
          <div className="flex justify-between mt-32">
            {prevNewsItem && (
              <Link href={`/news/${prevNewsItem.slug}`}>
                <a className="flex gap-8 text-blue-light">
                  <Left />
                  {prevNewsItem?.meta.title}
                </a>
              </Link>
            )}
            <span></span>
            {nextNewsItem?.meta.title && (
              <Link href={`/news/${nextNewsItem.slug}`}>
                <a className="flex gap-8 justify-self-end text-blue-light">
                  {nextNewsItem.meta.title}
                  <Right />
                </a>
              </Link>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

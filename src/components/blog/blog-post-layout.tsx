import classNames from "classnames";
import Link from "next/link";
import md from "markdown-it";
import { formatDateTime } from "utils/format";
import Left from "icons/arrow-left.svg";
import Right from "icons/arrow-right.svg";
import { BlogPostMeta, BlogPostRaw, BLOG_URL_ROOT } from "utils/blog";

interface BlogPostLayoutProps {
  className?: string;
  meta: BlogPostMeta;
  content: string;
  prevPost: BlogPostRaw | null;
  nextPost: BlogPostRaw | null;
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  className,
  meta,
  content,
  prevPost,
  nextPost,
}) => {
  return (
    <div className="flex flex-col">
      <PageLayout>
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
            className="w-full h-40vh"
            alt="mountains"
          /> */}
            {content && (
              <div
                className="text-black-gray text-14"
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
              />
            )}
            <div className="flex justify-between mt-32">
              {prevPost && (
              <Link href={`${BLOG_URL_ROOT}/${prevPost.slug}`}>
                <a className="flex gap-8 text-blue-light">
                  <Left />
                  {prevPost.title}
                </a>
              </Link>
            )}
            <span></span>
            {nextPost && (
              <Link href={`${BLOG_URL_ROOT}/${nextPost.slug}`}>
                <a className="flex gap-8 justify-self-end text-blue-light">
                  {nextPost.title}
                  <Right />
                </a>
              </Link>
            )}
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

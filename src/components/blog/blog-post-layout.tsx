import classNames from "classnames";
import md from "markdown-it";
import Link from "next/link";

import {Arrow} from "~/assets";
import {PageLayout} from "~/components/layout";
import {BLOG_URL_ROOT, BlogPostMeta, BlogPostRaw} from "~/utils/blog";
import {formatDateTime} from "~/utils/format";

interface BlogPostLayoutProps {
  className?: string,
  meta: BlogPostMeta,
  content: string,
  prevPost: BlogPostRaw | null,
  nextPost: BlogPostRaw | null,
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
      <PageLayout currentPage="BLOG">
        <section
          className={classNames("w-full h-screen mt-80 bg-dark", className)}
        >
          <div className="mx-auto w-3/4">
            {meta.title && <h1>{meta.title}</h1>}
            <div className="flex justify-between mb-16">
              {meta.date && (
                <span className="text-blue-date">
                  {formatDateTime(meta.date)}
                </span>
              )}
              {meta.tags && <span className="text-pink">#{meta.tags}</span>}
            </div>
            {content && (
              <div
                className="text-black-gray text-small"
                dangerouslySetInnerHTML={{__html: md().render(content)}}
              />
            )}
            <div className="flex justify-between mt-32">
              {prevPost && (
                <Link href={`${BLOG_URL_ROOT}/${prevPost.slug}`}>
                  <a className="flex gap-8 text-blue">
                    <Arrow.Left />
                    {prevPost.title}
                  </a>
                </Link>
              )}
              <span></span>
              {nextPost && (
                <Link href={`${BLOG_URL_ROOT}/${nextPost.slug}`}>
                  <a className="flex gap-8 justify-self-end text-blue">
                    {nextPost.title}
                    <Arrow.Right />
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

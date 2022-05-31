import md from "markdown-it";
import Link from "next/link";

import {Arrow} from "~/assets";
import {PageLayout} from "~/components/layout";
import {BLOG_URL_ROOT, BlogPostMeta, BlogPostRaw} from "~/utils/blog";
import {formatDateTime} from "~/utils/format";

interface BlogPostLayoutProps {
  meta: BlogPostMeta,
  content: string,
  prevPost: BlogPostRaw | null,
  nextPost: BlogPostRaw | null,
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  meta,
  content,
  prevPost,
  nextPost,
}) => {
  return (
    <PageLayout currentPage="BLOG" className="pt-80">
      <div className="max-w-screen-lg mx-auto">
        <main>
          <h1>{meta.title}</h1>
          <div className="flex justify-between mb-32">
            {meta.date && (
              <span className="text-blue-dark">
                {formatDateTime(meta.date)}
              </span>
            )}
            {meta.tags.length > 0 && (
              <div className="flex space-x-8 font-bold">
                {meta.tags.map(
                  tag => (
                    <Link key={tag} href={`${BLOG_URL_ROOT}/${tag}`}>
                      <a className="text-purple">#{tag}</a>
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
          {content && (
            <div
              className="text-black-gray text-small"
              dangerouslySetInnerHTML={{__html: md().render(content)}}
            />
          )}
        </main>
        <div className="flex text-medium border-t-1 justify-between my-32">
          {prevPost && (
            <Link href={`${BLOG_URL_ROOT}/${prevPost.slug}`}>
              <a className="flex flex-grow gap-x-8">
                <Arrow.Left />
                {prevPost.title}
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`${BLOG_URL_ROOT}/${nextPost.slug}`}>
              <a className="flex flex-grow justify-end gap-x-8">
                {nextPost.title}
                <Arrow.Right />
              </a>
            </Link>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

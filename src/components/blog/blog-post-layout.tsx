import md from "markdown-it";
import Link from "next/link";

import {LeafOver,PageLayout} from "~/components/layout";
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
        <LeafOver className="my-32"
          prev={prevPost && ({url: `${BLOG_URL_ROOT}/${prevPost.slug}`, title: prevPost.title})}
          next={nextPost && ({url: `${BLOG_URL_ROOT}/${nextPost.slug}`, title: nextPost.title})}
        />
      </div>
    </PageLayout>
  );
};


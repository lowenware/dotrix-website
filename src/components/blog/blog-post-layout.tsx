import md from "markdown-it";
import Link from "next/link";

import {LeafOver, PageLayout} from "~/components/layout";
import {BlogPostMeta, BlogPostRaw} from "~/modules/blog";
import cfg from "~/modules/config";
import {ContentManager, SocialMeta, StaticPageMeta} from "~/modules/content-manager";
import {formatDateTime} from "~/utils/format";

interface BlogPostProps {
  meta: BlogPostMeta,
  content: string,
  prev: BlogPostRaw | null,
  next: BlogPostRaw | null,
}

interface BlogPostLayoutProps {
  post: BlogPostProps,
  menu: StaticPageMeta[],
  social: SocialMeta[],
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  post,
  menu,
  social,

}) => {
  const {meta, content, prev, next} = post;
  const root = ContentManager.root(menu, cfg.blog.slug);
  return (
    <PageLayout className="pt-80" slug={[meta.slug]} menu={menu} social={social}>
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
                    <Link key={tag} href={`${root.url}/${tag}`}>
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
          prev={prev && ({url: `${root.url}/${prev.slug}`, title: prev.title})}
          next={next && ({url: `${root.url}/${next.slug}`, title: next.title})}
        />
      </div>
    </PageLayout>
  );
};


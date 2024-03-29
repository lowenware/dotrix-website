import Image from "next/image";
import Link from "next/link";

import {LeafOver, Markdown,PageLayout} from "~/components/layout";
import {site} from "~/config";
import {BlogPostMeta, BlogPostRaw} from "~/modules/blog";
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
  const root = ContentManager.root(menu, site.blog.slug);
  return (
    <PageLayout className="pt-80" slug={site.blog.slug} menu={menu} social={social}>
      <div className="max-w-screen-lg mx-auto p-24 lg:p-0">
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
          {meta.image && (
            <Image
              src={`//${site.blog.slug}/${meta.slug}/${meta.image}`}
              alt={meta.title}
              width={1920}
              height={1080}
              quality="100"
            />
          )}
          <Markdown className="text-black-gray text-small" content={content}></Markdown>
        </main>
        <LeafOver className="my-32"
          prev={prev && ({url: `${root.url}/${prev.slug}`, title: prev.title})}
          next={next && ({url: `${root.url}/${next.slug}`, title: next.title})}
        />
      </div>
    </PageLayout>
  );
};


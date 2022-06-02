import {PageLayout, Slide} from "~/components/layout";
import {Paginator} from "~/components/paginator";
import {BlogPostMeta, Tag} from "~/modules/blog";
import cfg from "~/modules/config";
import {ContentManager, SocialMeta, StaticPageMeta} from "~/modules/content-manager";

import {BlogPosts} from "./blog-posts";

interface BlogProps {
  posts: BlogPostMeta[],
  totalPages: number,
  page: number,
  tags: Tag[],
  tag?: string,
}

interface BlogLayoutProps {
  menu: StaticPageMeta[],
  social: SocialMeta[],
  blog: BlogProps,
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  menu,
  social,
  blog,
}) => {
  const root = ContentManager.root(menu, cfg.blog.slug);
  const {posts, totalPages, page, tag} = blog;
  return (
    <PageLayout slug={cfg.blog.slug} menu={menu} social={social}>
      <Slide className="mt-80" image="/images/low-poly-mountain.png" size="small">
        <h1>
          Blog{tag && (
            <span className="text-purple">
              <span className="mx-24">#</span>
              {tag}
            </span>
          )}
        </h1>
      </Slide>

      <BlogPosts posts={posts} className="w-full min-h-min -mt-32" />

      <Paginator
        className="my-24"
        page={page}
        totalPages={totalPages}
        root={tag ? `${root.url}/${tag}` : root.url}
      />
    </PageLayout>
  );
};

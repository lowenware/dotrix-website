import {PageLayout, Slide} from "~/components/layout";
import {Paginator} from "~/components/paginator";
import {BLOG_URL_ROOT, BlogPostMeta, Tag} from "~/utils/blog";

import {BlogPosts} from "./blog-posts";

interface BlogLayoutProps {
  posts: BlogPostMeta[],
  totalPages: number,
  page: number,
  tags: Tag[],
  tag?: string,
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  posts,
  totalPages,
  page,
  //  tags TODO: implement tags,
  tag,
}) => {
  return (
    <PageLayout currentPage={"BLOG"}>
      <Slide className="mt-80" image="/images/low-poly-mountain.png" size="small">
        <h1>
          Blog {tag && <span className="text-14">{tag}</span>}
        </h1>
      </Slide>

      <BlogPosts posts={posts} className="w-full min-h-min mt-48" />

      <Paginator
        className="my-16"
        page={page}
        totalPages={totalPages}
        root={tag ? `${BLOG_URL_ROOT}/${tag}` : BLOG_URL_ROOT}
      />
    </PageLayout>
  );
};

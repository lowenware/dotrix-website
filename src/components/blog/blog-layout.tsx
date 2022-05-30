import {PageLayout} from "~/components/layout";
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
     <Slide image="/images/low-poly-mountain.png" size="small">
       <p className="text-48 text-white font-bold">
            Blog {tag && <span className="text-14">{tag}</span>}
          </p>
      </Slide>

      <BlogPosts posts={posts} className="w-full min-h-min -mt-32" />

      <Paginator
        className="my-16"
        page={page}
        totalPages={totalPages}
        root={tag ? `${BLOG_URL_ROOT}/${tag}` : BLOG_URL_ROOT}
      />
    </PageLayout>
  );
};

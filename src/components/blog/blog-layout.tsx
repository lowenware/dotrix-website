import { PageLayout } from "components/layout";
import { Paginator } from "components/paginator";

import { BLOG_URL_ROOT, BlogPostMeta, Tag } from "~/utils/blog";

import { BlogPosts } from "./blog-posts";

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
  tags,
  tag,
}) => {
  return (
    <PageLayout currentPage={"BLOG"}>
      <div className="home__image w-full h-60vh sm:h-screen lg:h-40vh bg-fixed items-center justify-center bg-no-repeat lg:bg-contain bg-cover bg-center md:bg-top lg:bg-top">
        <div className="bg-opacity-70 flex flex-col bg-black-100 h-60vh sm:h-screen lg:h-40vh bg-fixed w-full">
          <p className="text-white text-48 lg:text-72 self-center my-auto">
            Blog {tag && <span className="text-14">{tag}</span>}
          </p>
        </div>
      </div>

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

import classNames from "classnames";

import {BLOG_URL_ROOT, BlogPostMeta} from "~/utils/blog";

import {BlogCard} from "./blog-card";

interface BlogPostsProps {
  className?: string,
  posts: BlogPostMeta[],
}

export const BlogPosts: React.FC<BlogPostsProps> = ({className, posts}) => {
  return (
    <section
      className={classNames(
        "px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 z-30",
        className
      )}
    >
      {posts &&
        posts.map(post => (
          <a
            key={post.slug}
            href={`${BLOG_URL_ROOT}/${post.slug}`}
            className="hover:no-underline hover:-translate-y-32 transition ease-out"
          >
            <BlogCard className="h-450" post={post} />
          </a>
        ))}
    </section>
  );
};

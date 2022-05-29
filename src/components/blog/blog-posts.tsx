import classNames from "classnames";
import { BLOG_URL_ROOT, BlogPostMeta } from "utils/blog";

import { BlogCard } from "./blog-card";

interface BlogPostsProps {
  className?: string,
  posts: BlogPostMeta[],
}

export const BlogPosts: React.FC<BlogPostsProps> = ({ className, posts }) => {
  return (
    <section
      className={classNames(
        "px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32",
        className
      )}
    >
      {posts &&
        posts.map(post => (
          <a key={post.slug} href={`${BLOG_URL_ROOT}/${post.slug}`}>
            <BlogCard post={post} />
          </a>
        ))}
    </section>
  );
};

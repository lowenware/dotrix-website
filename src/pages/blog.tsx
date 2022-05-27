import { BlogLayout } from "components/blog";
import { NextPage } from "next";
import { Blog, BlogStaticProps, mapBlogPostRawToMeta } from "utils/blog";

const BlogPage: NextPage<BlogStaticProps> = ({posts, tags, page, totalPages}) => {
  return (
    <BlogLayout 
      posts={posts.map(mapBlogPostRawToMeta)}
      tags={tags}
      page={page}
      totalPages={totalPages}
    />
  )
};

export const getStaticProps = async () => {
  const blog = new Blog();
  return {
    props: blog.getBlogPageStaticProps(1),
  };
};

export default BlogPage;

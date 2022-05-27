import { BlogLayout } from "components/blog";
import { NextPage } from "next";
import Head from "next/head";
import { Blog, BlogStaticProps, mapBlogPostRawToMeta } from "utils/blog";
import { PAGES } from "utils/pages";

const BlogPage: NextPage<BlogStaticProps> = ({
  posts,
  tags,
  page,
  totalPages,
}) => {
  return (
    <>
      <Head>
        <title>{PAGES.BLOG.title}</title>
      </Head>
      <BlogLayout
        posts={posts.map(mapBlogPostRawToMeta)}
        tags={tags}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const blog = new Blog();
  return {
    props: blog.getBlogPageStaticProps(1),
  };
};

export default BlogPage;

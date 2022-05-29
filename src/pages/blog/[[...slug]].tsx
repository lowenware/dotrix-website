import { BlogLayout, BlogPostLayout } from "components";
import { GetStaticProps, NextPage } from "next";
import {
  Blog,
  BlogPostStaticProps,
  BlogStaticProps,
  mapBlogPostRawToMeta,
} from "utils/blog";

export async function getStaticPaths() {
  const blog = new Blog();
  const paths = blog.getStaticPaths();

  return {
    paths,
    fallback: false,
  };
}

const BlogSlugPage: NextPage<BlogStaticProps | BlogPostStaticProps> = (props) => {
  if (props.mode === "POST") {
    const { meta, content, prevPost, nextPost } = props;
    return (
      <BlogPostLayout
        meta={mapBlogPostRawToMeta(meta)}
        content={content}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    );
  }

  const { posts, tag, tags, page, totalPages } = props;

  return (
    <BlogLayout
      tag={tag}
      posts={posts.map(mapBlogPostRawToMeta)}
      tags={tags}
      page={page}
      totalPages={totalPages}
    />
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug && Array.isArray(params.slug)) ? params.slug : ["1"];

  const blog = new Blog();
  return {
    props: blog.getBlogStaticProps(slug)
  };
};

export default BlogSlugPage;

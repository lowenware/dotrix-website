import Image from "next/image";

import {Card, CardBody} from "~/components/card";
import {BLOG_POSTS_ROOT, BlogPostMeta} from "~/utils/blog";
import {formatDate} from "~/utils/format";

interface BlogCardProps {
  className?: string,
  post: BlogPostMeta,
}

export const BlogCard: React.FC<BlogCardProps> = ({className, post}) => {
  return (
    <Card className={className}>
      {post.image && (
        <Image
          src={`//${BLOG_POSTS_ROOT}/${post.image}`}
          alt={""}
          height={400}
          width={200}
        />
      )}
      <CardBody className="h-full">
        <article className="flex flex-col space-y-24">
          <h1>{post.title}</h1>
          <p className="text-gray-font">
            {post.summary}
          </p>
        </article>
        <div className="flex justify-between text-small mt-auto">
          <div className="text-blue-dark">{formatDate(post.date)}</div>
          {post.tags.length > 0 && (
            <div className="text-purple font-bold">{`#${post.tags[0]}`}</div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

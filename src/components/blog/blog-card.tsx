import Image from "next/image";

import {Card} from "~/components/card";
import {BLOG_POSTS_ROOT, BlogPostMeta} from "~/utils/blog";
import {formatDate} from "~/utils/format";

interface BlogCardProps {
  className?: string,
  post: BlogPostMeta,
}

export const BlogCard: React.FC<BlogCardProps> = ({className, post}) => {
  return (
    <Card className={className}>
      <>
        {post.image && (
          <Image
            src={`//${BLOG_POSTS_ROOT}/${post.image}`}
            alt={""}
            height={200}
            width={100}
          />
        )}
        <div className="flex m-16 flex-col  justify-center">
          <h3>{post.title}</h3>
          <p className="mt-16 text-gray-font ">
            {post.summary}
          </p>
        </div>
        <div className="flex mt-auto justify-between m-16 flex-0">
          <p className="text-blue-date">{formatDate(post.date)}</p>
          {post.tags && (
            <p className="text-14 text-pink mr-8">{post.tags.map(t => `#${t}`).join(", ")}</p>
          )}
        </div>
      </>
    </Card>
  );
};

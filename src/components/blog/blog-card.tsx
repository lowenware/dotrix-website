import Image from "next/image";
import { BLOG_POSTS_ROOT, BlogPostMeta } from "utils/blog";
import { formatDate } from "utils/format";

import { Card } from "../card/card";

interface BlogCardProps {
  className?: string,
  post: BlogPostMeta,
}

export const BlogCard: React.FC<BlogCardProps> = ({ className, post }) => {
  return (
    <Card className={className}>
      <>
        {post.image && (
          <Image
            src={`/${BLOG_POSTS_ROOT}/${post.image}`}
            alt={""}
            height={200}
            width={100}
          />
        )}
        <div className="flex m-16 flex-col justify-center">
          <p className="text-32 text-white font-bold">{post.title}</p>
          <p className="text-14 mr-25 mt-16 font-normal text-gray-font ">
            {post.summary}
          </p>
        </div>
        <div className="flex mt-auto justify-between m-16 flex-0">
          <p className="text-gray text-14">{formatDate(post.date)}</p>
          {post.tags && (
            <p className="text-14 text-pink mr-8">{post.tags.map(t => `#${t}`).join(", ")}</p>
          )}
        </div>
      </>
    </Card>
  );
};

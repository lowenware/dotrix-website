import { ReactNode } from "react";
import { NewsMeta, NEWS_FILES_ROOT } from "utils/news";
import { Card } from "../card/card";
import Image from "next/image";
import { formatDateTime } from "utils/format";
interface NewsCardProps {
  className?: string;
  meta: NewsMeta;
}

export const NewsCard: React.FC<NewsCardProps> = ({ className, meta }) => {
  return (
    <>
      <Card className={className}>
        <>
          {meta.image && (
            <Image
              src={`/${NEWS_FILES_ROOT}/${meta.image}`}
              alt={""}
              height={200}
              width={100}
            />
          )}
          <div className="flex m-16 flex-col justify-center">
            <p className="text-32 text-white font-bold">{meta.title}</p>
            <p className="text-14 mr-25 mt-16 font-normal text-gray-font ">
              {meta.summary}
            </p>
          </div>
          <div className="flex mt-auto justify-between m-16 flex-0">
            <p className="text-gray text-14">{formatDateTime(meta.date)}</p>
            {meta.tags && (
              <p className="text-14 text-pink mr-8">{"#" + meta.tags}</p>
            )}
          </div>
        </>
      </Card>
    </>
  );
};

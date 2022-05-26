import classNames from "classnames";
import { NewsListItem, NEWS_URLS_ROOT } from "utils/news";
import { NewsCard } from "./NewsCard";

interface NewsListProps {
  className?: string;
  items: NewsListItem[];
}

export const NewsList: React.FC<NewsListProps> = ({ className, items }) => {
  return (
    <section
      className={classNames(
        "px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32",
        className
      )}
    >
      {items &&
        items.map(({ slug, meta }) => (
          <a key={slug} href={`${NEWS_URLS_ROOT}/${slug}`}>
            <NewsCard meta={meta} />
          </a>
        ))}
    </section>
  );
};

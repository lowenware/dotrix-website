import { NewsList, PageLayout } from "components";
import { Paginator } from "components/paginator";
import { ListingData, NEWS_URLS_ROOT, NEWS_ITEMS_PER_PAGE } from "utils/news";

interface ListingLayoutProps {
  listing: ListingData;
}

export const ListingLayout: React.FC<ListingLayoutProps> = ({ listing }) => {
  const { items, totalPages, currentPage } = listing;

  return (
    <>
      <PageLayout>
        <div className="home__image w-full h-40vh bg-fixed items-center justify-center bg-no-repeat lg:bg-contain bg-cover bg-center md:bg-top lg:bg-top">
          <div className="bg-opacity-70 flex flex-col bg-black-100 h-40vh bg-fixed w-full">
            <p className="text-white text-48 lg:text-72 self-center my-auto">
              News
            </p>
          </div>
        </div>
        <NewsList items={items} className="w-full min-h-min -mt-32" />

        <Paginator
          className="my-16"
          page={currentPage}
          totalPages={totalPages}
          root={NEWS_URLS_ROOT}
        />
      </PageLayout>
    </>
  );
};

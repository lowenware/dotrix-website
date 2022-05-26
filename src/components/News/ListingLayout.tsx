import { Footer, JoinUs, TopBar, NewsList } from "components";
import { Paginator } from "components/Paginator";
import { ListingData, NEWS_URLS_ROOT, NEWS_ITEMS_PER_PAGE } from "utils/news";
import { useState } from "react";
interface ListingLayoutProps {
  listing: ListingData;
}

export const ListingLayout: React.FC<ListingLayoutProps> = ({ listing }) => {
  const { items, totalPages, currentPage } = listing;
  console.log(totalPages);
  return (
    <>
      <TopBar />
      <div className="home__image w-full h-40.4 bg-fixed items-center justify-center bg-no-repeat lg:bg-contain bg-cover bg-center md:bg-top lg:bg-top">
        <div className="bg-opacity-70 flex flex-col bg-black-100 h-40.4 bg-fixed w-full">
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

      <JoinUs />
      <Footer />
    </>
  );
};

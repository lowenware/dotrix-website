import { ListingLayout } from "components";
import { NextPage } from "next";

import { getListingStaticProps, getNewsItems, ListingData } from "utils/news";

const NewsPage: NextPage<ListingData> = (listing) => {
  return <ListingLayout listing={listing}></ListingLayout>;
};

export const getStaticProps = async () => {
  const items = getNewsItems();
  return {
    props: getListingStaticProps(1, items),
  };
};

export default NewsPage;

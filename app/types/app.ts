export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type LiveItem = {
  img: string;
  title: string;
};

export type ListingCard = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
export type SearchResultData = ListingCard[];
export type ExploreData = ExploreItem[];
export type LiveData = LiveItem[];

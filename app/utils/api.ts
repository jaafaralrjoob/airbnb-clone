export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.error(error);
  }
};

export const getLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const liveData = await res.json();
    return liveData;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchResults = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const SearchResultData = await res.json();
    return SearchResultData;
  } catch (error) {
    console.error(error);
  }
};

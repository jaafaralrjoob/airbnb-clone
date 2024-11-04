import { format } from "date-fns";
import Header from "../_components/header/Header";
import { getSearchResults } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../_components/ListingCard";
import Map from "../_components/Map";

type SearchParams = {
  location: string;
  startDate: Date;
  endDate: Date;
  numOfGuests: number;
};
async function page({ searchParams }: { searchParams: SearchParams }) {
  const { location, startDate, endDate, numOfGuests } = searchParams;
  if (!searchParams) return null;
  let formattedStartDate = "";
  let formattedEndDate = "";
  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  }

  const placeholder = `${location} | ${formattedStartDate || ""} - ${
    formattedEndDate || ""
  } | ${numOfGuests || 0} guests`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await getSearchResults();
  console.log(searchResultData);
  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <section>
          <div className="container flex">
            <div className="pt-14 pr-4">
              <p className="text-xs">
                300+ Stays - {formattedStartDate} - {formattedEndDate} - for{" "}
                {numOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">
                Stays in {location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <button type="button" key={filter} className="filter-btn">
                    {filter}
                  </button>
                ))}
              </div>
              <div>
                {searchResultData?.map((item) => (
                  <ListingCard key={item.title} item={item} />
                ))}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[600px]">
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default page;

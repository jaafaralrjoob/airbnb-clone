"use client";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function SearchBar({ placeholder }: { placeholder?: string }) {
  const path = usePathname();
  const [input, setInput] = useState("");
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={path === "/search" ? placeholder : "start your search"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {input && (
        <div className="absolute flex flex-col top-[100%] left-[50%] translate-x-[-50%]">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5861"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b  bg-white p-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number Of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
              min={1}
            />
          </div>
          <div className="flex justify-center items-center gap-4 bg-white p-5">
            <button
              type="button"
              className=" text-gray-500 bg-slate-300 rounded-full px-4 py-2"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                query: {
                  location: input,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  numOfGuests,
                },
              }}
              className=" text-white bg-red-400 rounded-full px-4 py-2"
              onClick={() => setInput("")}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;

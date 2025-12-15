import { useState, useEffect, type JSX } from "react";
import data from "./data.json";
import type Listing from "./models/Listing";
import ListingItem from "./ListingItem";
import FilterItem from "./FilterItem";
import "./App.css";

function App(): JSX.Element {
  const [listings, setListings] = useState<Listing[]>(data);

  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (filters.length) {
      setListings(() => {
        return data.filter((listing: Listing) => {
          const tags = [
            listing.role,
            listing.level,
            ...listing.languages,
            ...listing.tools,
          ];
          return (
            tags.filter((tag) => filters.includes(tag)).length ===
            filters.length
          );
        });
      });
    } else {
      setListings(data);
    }
  }, [filters]);

  function addFilter(filter: string): void {
    if (!filters.includes(filter)) {
      setFilters((oldFilters) => {
        return [...oldFilters, filter];
      });
    }
  }

  function removeFilter(filter: string): void {
    setFilters((oldFilters) => {
      return oldFilters.filter((f) => f !== filter);
    });
  }

  return (
    <div>
      <header className="bg-jl-green-400"></header>

      <div className="px-4">
        {Boolean(filters.length) && (
          <div className="bg-white mx-auto -mt-8 py-4 px-6 rounded-sm grid grid-cols-5 items-center max-w-[1000px]">
            <div className="flex col-span-4 gap-6 flex-wrap">
              {filters.map((filter) => {
                return (
                  <FilterItem
                    key={filter}
                    title={filter}
                    removeFilter={removeFilter}
                  />
                );
              })}
            </div>
            <span
              className="text-jl-gray-400 text-end hover:text-jl-green-400 hover:underline hover:cursor-pointer"
              onClick={() => setFilters([])}
            >
              Clear
            </span>
          </div>
        )}

        {listings.map((listing) => {
          return (
            <ListingItem
              key={listing.id}
              listing={listing}
              addFilter={addFilter}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

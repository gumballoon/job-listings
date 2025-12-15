import type { JSX } from "react";
import type Listing from "./models/Listing";
import TagItem from "./TagItem";

interface ListingItemProps {
    listing: Listing;
    addFilter: (filter: string) => void;
}

export default function ListingItem({ listing, addFilter }: ListingItemProps): JSX.Element {
    const tags = [listing.role, listing.level, ...listing.languages, ...listing.tools];

    return (
        <section className={`bg-white w-full my-12 mx-auto relative pt-9 pb-4 px-4 rounded-sm box-border drop-shadow-xl ${listing.featured && 'border-jl-green-400 border-l-[5px]'} max-w-[1000px] lg:flex lg:items-center lg:py-6`}>
            <img src={listing.logo} alt={`Logo for ${listing.company}`} className="w-[50px] -mt-4 absolute -top-2 lg:relative lg:m-0 lg:w-21 lg:h-21 lg:top-0"/>
            <div className="lg:ml-6 lg:mr-auto">
                <div className="flex items-center gap-2">
                    <h2 className="text-jl-green-400 font-semibold mr-4">{listing.company}</h2>
                    {listing.new && <span className="text-sm text-white bg-jl-green-400 px-3 pt-1.25 rounded-2xl">NEW!</span>}
                    {listing.featured && <span className="text-sm text-white bg-jl-green-900 px-3 pt-1.25 rounded-2xl">FEATURED</span>}
                </div>
                <h3 className="text-jl-green-900 font-semibold my-2">{listing.position}</h3>
                <div className="flex items-center gap-3 text-jl-gray-400 font-normal mb-4 lg:mb-0">
                    <p>{listing.postedAt}</p>
                    <span className="w-1 h-1 bg-jl-gray-400 opacity-50 rounded-2xl"></span>
                    <p>{listing.contract}</p>
                    <span className="w-1 h-1 bg-jl-gray-400 opacity-50 rounded-2xl"></span>
                    <p>{listing.location}</p>
                </div>
            </div>
            <hr className="text-jl-gray-400 opacity-50 lg:hidden"/>
            <div className="flex py-4 gap-4">
                {tags.map(tag => {
                    return < TagItem key={`${listing.company}-${tag}`} title={tag} addFilter={addFilter} />
                })}    
            </div>
        </section>
    )
}
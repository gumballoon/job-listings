import type { JSX } from "react";
import IconRemove from "./assets/icon-remove.svg?react";

interface FilterItemProps {
    title: string;
    removeFilter: (filter: string) => (void);
}

export default function FilterItem({ title, removeFilter }: FilterItemProps): JSX.Element {
    return (
        <div className="flex items-center m-0">
            <span className="bg-jl-green-50 text-jl-green-400 py-0.5 px-2 rounded-tl-sm rounded-bl-sm font-semibold">{title}</span>
            <span className="bg-jl-green-400 p-2 rounded-tr-sm rounded-br-sm hover:bg-jl-green-900 hover:cursor-pointer" onClick={() => removeFilter(title)}>
                <IconRemove />
            </span>
        </div>
    )
}
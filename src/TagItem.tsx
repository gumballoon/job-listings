interface TagItemProps {
  title: string;
  addFilter: (filter: string) => void;
}

export default function TagItem({ title, addFilter }: TagItemProps) {
    return (
        <span className="bg-jl-green-50 text-jl-green-400 px-1.5 pt-1.5 rounded-sm hover:bg-jl-green-400 hover:text-white hover:cursor-pointer transition-all duration-200" onClick={() => addFilter(title)}>
            {title}
        </span>
    )
}

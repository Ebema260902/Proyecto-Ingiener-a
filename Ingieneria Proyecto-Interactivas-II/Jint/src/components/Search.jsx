export function Search() {
    return (
        <div
            className="w-full sm:w-fit flex gap-2 border border-zinc-400 px-4 rounded-md items-center dark:bg-dark-secondary"
        >
            <input
                className="p-1 outline-none  dark:bg-dark-secondary dark:text-white"
                type="text"
                placeholder="Search..."
                name="search_input"
            />
        </div>
    )
}

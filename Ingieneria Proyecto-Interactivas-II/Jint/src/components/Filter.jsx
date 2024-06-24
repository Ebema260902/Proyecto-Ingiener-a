export function Filter({title, data, name}) {
    return (
        <div className="flex gap-4 items-center" action="">
            <p className="font-semibold dark:text-white">{title}</p>
            <select name={`${name}_id`} className="border border-zinc-400 px-4 py-2 rounded-md dark:bg-dark-secondary dark:text-white">
                <option value={0} >All</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

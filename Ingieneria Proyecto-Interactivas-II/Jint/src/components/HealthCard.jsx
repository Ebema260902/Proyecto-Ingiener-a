export function HealthCard({ healthTitle, healthText }) {
    return (
        <>
            <section className="grid text-2xl gap-7 font-semibold">
                <div className="grid gap-7">
                    <sub>{healthTitle}</sub>
                    <img src="/line.png" alt="" />
                    <div className="flex gap-24">
                        <div className="text-base grid gap-2">
                            <p className="text-slate-500 text-xs mb-3 dark:text-white">
                                {healthText}
                            </p>
                            <div className="grid gap-5">
                                <select className="w-28 h-7 bg-slate-50 rounded-lg border border-slate-400 dark:bg-dark-secondary">
                                    <option value="" disabled selected>
                                        Pick time
                                    </option>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1} hours
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="w-48 h-7 bg-violet-400 rounded-lg border border-sky-600 text-xs font-semibold grid justify-center items-center text-white">
                        Save Data
                    </button>
                </div>
            </section>
        </>
    )
}

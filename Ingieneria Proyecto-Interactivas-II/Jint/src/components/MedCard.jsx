export function MedCard({ medTitle, medText }) {
    return (
        <>
            <section className="grid text-2xl gap-7 font-semibold">
                <div className="grid gap-7">
                    <sub>{medTitle}</sub>
                    <img src="/line.png" alt="" />
                    <div className="flex gap-24">
                        <div className="text-base grid gap-2">
                            <p className=" text-slate-500 text-xs mb-3 dark:text-white">
                                {medText}
                            </p>
                            <div className="grid gap-5">
                                <select className="w-48 h-7  rounded-lg border border-slate-400 dark:bg-dark-secondary">
                                    <option value="" disabled selected>
                                        Select condition
                                    </option>
                                    <option value="hypertension">
                                        Hypertension
                                    </option>
                                    <option value="diabetes">Diabetes</option>
                                    <option value="asthma">Asthma</option>
                                    <option value="arthritis">Arthritis</option>
                                    <option value="depression">
                                        Depression
                                    </option>
                                    <option value="anxiety">Anxiety</option>
                                    <option value="allergies">Allergies</option>
                                    <option value="obesity">Obesity</option>
                                    <option value="heart_disease">
                                        Heart Disease
                                    </option>
                                    <option value="chronic_pain">
                                        Chronic Pain
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="w-48 h-7 bg-violet-400 rounded-lg border border-sky-600 text-xs font-semibold grid justify-center items-center text-white">
                        Add Condition
                    </button>
                    <div className="mt-5">
                        <div className="p-4 bg-slate-100 rounded-lg border border-slate-300 mt-3 sm:w-1/2 dark:bg-dark-secondary">
                            Example Condition
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

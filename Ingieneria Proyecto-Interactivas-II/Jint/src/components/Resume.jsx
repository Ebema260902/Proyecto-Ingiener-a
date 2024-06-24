import { ResumeTask } from './ResumeTask.jsx'

export function Resume() {
    return (
        <section className="grid gap-8">
            {/* EVENTS OF THE DAY */}
            <section className="flex flex-col gap-4 mt-8">
                <h2 className="font-bold text-xl dark:text-white">
                    Completed Today
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-6">
                    <ResumeTask />
                    <ResumeTask />
                    <ResumeTask />
                </div>
            </section>

            {/* EVENTS OF THE WEEK */}
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-xl mt-5 dark:text-white">
                    Completed this week
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-6">
                    <ResumeTask />
                    <ResumeTask />
                    <ResumeTask />
                    <ResumeTask />
                    <ResumeTask />
                </div>
            </section>
        </section>
    )
}

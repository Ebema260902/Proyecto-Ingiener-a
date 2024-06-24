import { TaskCard } from '../components/TaskCard'

export function History() {
    return (
        <>
            <div className=" px-4 py-8 sm:ml-52 bg-white">
                <h1 className="font-bold text-4xl mb-12">Historic</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </div>
        </>
    )
}

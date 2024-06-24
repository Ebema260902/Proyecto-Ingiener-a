import { Calendar } from '../components/Calendar'
import { HorizontalCard } from '../components/HorizontalCard'
import { Slider } from '../components/Slider'
import { WelcomeCard } from '../components/WelcomeCard'
import { InformationCard } from '../components/InformationCard'
import { useFetchCourses } from '../hooks/useFetchCourses'
import { useFetchEventsWeek } from '../hooks/useFetchEventsWeek'

export function Home() {
    const { courses, isLoadingCourses } = useFetchCourses()
    const { eventsWeek, isLoadingEventsWeek } = useFetchEventsWeek()
    console.log(eventsWeek)

    const createCourses = (items) => {
        return items.map((item) => {
            return (
                <HorizontalCard
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    initials={item.initials}
                />
            )
        })
    }

    const showInformationCards = (item) => {
        return (
            <>
                <InformationCard
                    title={'To do this week'}
                    tasks={item.numberTasksWeek}
                    events={item.numberEventsWeek}
                />
                <InformationCard
                    title={"Week's tasks completed"}
                    tasks={item.numberTasksFinished}
                    events={item.numberEventsFinished}
                />
            </>
        )
    }

    return (
        <section className="grid grid-cols-1 px-4 gap-6 lg:px-[5rem] lg:grid-cols-4 xl:ml-[15rem] xl:px-4 pb-10">
            <div className="grid mt-5 lg:col-span-4 xl:col-span-3">
                <WelcomeCard />
                <h2 className="font-bold text-xl mt-5 dark:text-white">
                    My task Today
                </h2>

                <div className="w-full mt-5 overflow-hidden">
                    <Slider />
                </div>

                <h2 className="font-bold text-xl mt-5 dark:text-white">
                    My Courses
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] mt-5 gap-8">
                    {isLoadingCourses ? (
                        <p>Loading...</p>
                    ) : (
                        createCourses(courses)
                    )}
                </div>
            </div>

            <div className="flex flex-col mt-5 gap-4 lg:col-span-4 xl:col-auto">
                <section className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5">
                    {/* <InformationCard
                        title={'Pending of the week'}
                        taskCompleted={7}
                        eventCompleted={2}
                    />
                    <InformationCard
                        title={"Week's tasks completed"}
                        taskCompleted={7}
                        eventCompleted={2}
                    /> */}
                    {isLoadingEventsWeek ? <p>Loading...</p> : showInformationCards(eventsWeek)}
                </section>
                <Calendar />
            </div>
        </section>
    )
}

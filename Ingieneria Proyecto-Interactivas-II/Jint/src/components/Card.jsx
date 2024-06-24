import PropTypes from 'prop-types'
import { useContext } from 'react'
import { modalContext } from '../context/modalContext'
import { NavLink } from 'react-router-dom'
import { WarningTag } from './WarningTag'
import { differenceInDays, parse, parseISO } from 'date-fns'

export function Card({ id, title, date, time, img }) {
    const { setIsOpen } = useContext(modalContext)
    const taskID = id
    const { setTaskId, taskId } = useContext(modalContext)
    let text = ''

    const todayISO = new Date().toISOString().slice(0, 10);
    const todayDate = parseISO(todayISO);
    const daysDifference = differenceInDays(parse(date, 'dd-MM-yyyy', new Date()), todayDate);

    function openModal() {
        setTaskId(taskID)
        setIsOpen(true)
    }

    if (daysDifference < 2) {
        text = 'High'
    }
    else if(daysDifference < 5) {
        text = 'Med'
    }   
    else {
        text = 'Low'
    }

    return (
        <>
            <article className="rounded-xl border border-zinc-400 overflow-hidden dark:bg-dark-secondary">
                <div className="relative">
                    <img className="aspect-video" src={img} alt="#" />
                    <WarningTag text={text} />
                </div>
                <div className="p-5 flex flex-col">
                    <div>
                        <div className="flex relative">
                            <h3 className="text-center m-auto font-bold text-lg dark:text-white">
                                {title}
                            </h3>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                            <div>
                                <p className="text-zinc-700 dark:text-white/70">
                                    Date: {date}
                                </p>
                                <p className="text-zinc-700 dark:text-white/70">
                                    Hour: {time}
                                </p>
                            </div>
                        </div>
                    </div>
                    <NavLink
                        className="bg-primary rounded-xl py-2 px-6 text-white text-center mt-4 hover:bg-purple-600"
                        href=""
                        onClick={() => openModal()}
                        state={taskID}
                    >
                        See more
                    </NavLink>
                </div>
            </article>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.string,
}

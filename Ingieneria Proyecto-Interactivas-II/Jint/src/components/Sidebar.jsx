import { useState } from 'react'
import { Notification } from './Notification.jsx'
import { NavLink } from 'react-router-dom'
import { HamburgerMenuIcon } from './Icons/HamburgerMenuIcon.jsx'
import { NotificationIcon } from './Icons/NotificationIcon'
import { ExitIcon } from './Icons/ExitIcon'
import { HomeIcon } from './Icons/HomeIcon'
import { TaskIcon } from './Icons/TaskIcon'
import { StatisticsIcon } from './Icons/StatisticsIcon'
import { ConfigurationIcon } from './Icons/ConfigurationIcon'
import { LogOutIcon } from './Icons/LogOutIcon'
import PropTypes from 'prop-types'
import { ROUTE_PATHS } from '../routes/index.js'

export function Sidebar({
    user = 'Kevin Guido',
    email = 'kevinguidou@gmail.com',
    image = 'https://unavatar.io/Kevingu08',
}) {
    const [isOpen, setIsOpen] = useState(false)

    const [showNotifications, setShowNotifications] = useState(false)

    function toggleNavbars(){
        setIsOpen(!isOpen)
        if(showNotifications){
            setShowNotifications(false)
        }
    }

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications)
    }

    return (
        <>
            <div className="flex px-8 py-1 bg-white z-30 dark:bg-dark">
                <div className="xl:hidden w-full flex justify-end">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className={`translate-x-5 p-2 sm:hidden`}
                    >
                        <NotificationIcon width="24" height="24" />
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`translate-x-5 p-2`}
                    >
                        <HamburgerMenuIcon width="28" height="28" />
                    </button>
                </div>
            </div>

            <div
                onClick={() => toggleNavbars()}
                className={`${
                    isOpen ? 'block' : 'hidden'
                } bg-black/30 h-screen w-screen fixed z-30 top-0 left-0 right-0 backdrop-blur-sm xl:hidden`}
            ></div>

            <nav
                className={`${
                    isOpen ? 'translate-x-0' : 'translate-x-[-50rem]'
                } top-0  z-40 xl:translate-x-0 bg-primary fixed h-screen rounded-r-xl flex flex-col justify-between items-center transition-all duration-200 dark:bg-gradient-dark`}
            >
                <div className="relative">
                    <button
                        onClick={() => toggleNavbars()}
                        className="p-4 absolute translate-x-[11rem] xl:hidden"
                    >
                        <ExitIcon width="24" height="24" />
                    </button>
                    <div className="grid mb-6 gap-2 items-center text-center mt-8">
                        <img
                            className="w-16 m-auto rounded-full"
                            src={image}
                            alt=""
                        />
                        <p className="text-white">{user}</p>
                        <p className="text-xs text-white">{email}</p>
                    </div>
                    <ul className="flex flex-col m-auto text-start">
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li text-white"
                                to={ROUTE_PATHS.HOME}
                            >
                                <HomeIcon width="24" height="24" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li text-white"
                                to={ROUTE_PATHS.TASK}
                            >
                                <TaskIcon width="24" height="24" />
                                Task
                            </NavLink>
                        </li>
                        <li className="hidden md:block">
                            <a
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li text-white"
                                href="#"
                                onClick={() =>
                                    setShowNotifications(!showNotifications)
                                }
                            >
                                <NotificationIcon width="24" height="24" />
                                Notifications
                            </a>
                        </li>
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li text-white"
                                to={ROUTE_PATHS.STATISTICS}
                            >
                                <StatisticsIcon width="24" height="24" />
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li text-white"
                                to={ROUTE_PATHS.CONFIGURATION}
                            >
                                <ConfigurationIcon width="24" height="24" />
                                Configuration
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <span className="block h-[1.2px] w-[80%] m-auto my-2 bg-white"></span>
                    <NavLink
                        className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li text-white rounded-br-xl"
                        to={ROUTE_PATHS.WELCOME}
                    >
                        <LogOutIcon width="24" height="24" />
                        Log Out
                    </NavLink>
                </div>

                {/* NOTIFICATIONS */}
            </nav>

            <div
                className={`notification-panel ${showNotifications ? 'active' : ''}   `}
            >
                <nav className="grid gap-6 cont-notifications bg-slate-50 dark:bg-dark-secondary overflow-y-auto p-4">
                    <div className="flex items-center justify-between">
                        <h4 className="font-bold text-2xl  dark:text-white">
                            Notifications
                        </h4>
                        <div
                            onClick={toggleNotifications}
                            className="cursor-pointer"
                        >
                            <ExitIcon width="24" height="24" />
                        </div>
                    </div>
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                </nav>
            </div>
        </>
    )
}

Sidebar.propTypes = {
    user: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
}

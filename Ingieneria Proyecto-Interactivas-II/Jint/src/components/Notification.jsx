import { useState } from 'react'
import PropTypes from 'prop-types'

export function Notification({
    title = 'Notification Title',
    description = 'Lorem ipsum, dolorsit amet consectetur adipisicing elit. Libero dolores debitis perspiciatis non itaque deleniti vero est recusandae iste nesciunt magni',
    time = '12:30PM',
    img = 'https://unavatar.io/Kevingu08',
    day = 'Fri',
}) {
    const [showFullDescription, setShowFullDescription] = useState(false)

    return (
        <a
            href="#"
            className=" border-2 border-zinc-300 dark:border-zinc-600 shadow p-2 rounded-3xl dark:bg-dark-secondary"
        >
            <div className="flex gap-4">
                <div className="flex items-center">
                    <img
                        className="w-14 cover rounded-full border-2 border-primary dark:text-white"
                        src={img}
                        alt=""
                    />
                </div>

                <div className="flex  mt-2">
                    <div className="flex flex-col">
                        <div className="flex gap-6 justify-between items-center">
                            <strong
                                className="font-bold dark:text-white"
                                href="#"
                            >
                                {title}
                            </strong>
                            <div>
                                <span className="dark:text-white text-sm">
                                    {`${day}  ${time}`}
                                </span>
                            </div>
                        </div>
                        <p className="max-w-[14rem] dark:text-white">
                            {showFullDescription
                                ? description
                                : `${description.slice(0, 50)}...`}
                        </p>
                    </div>
                    <div className="flex gap-1"></div>
                </div>
            </div>
        </a>
    )
}

Notification.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.string,
    day: PropTypes.string,
}

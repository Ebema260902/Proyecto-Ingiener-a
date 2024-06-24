import { PropTypes } from 'prop-types';

export function InformationCard({title, tasks, events}) {
    return (
        <div className="shadow-main rounded-xl grid gap-4 p-4 dark:bg-dark-secondary dark:text-white">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="font-bold">
                Task: <span className="text-primary ml-4 text-xl">{tasks}</span>
            </p>
            <p className="font-bold">
                Event: <span className="text-primary ml-4 text-xl">{events}</span>
            </p>
        </div>
    )
}

InformationCard.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.number.isRequired,
    events: PropTypes.number.isRequired,
}

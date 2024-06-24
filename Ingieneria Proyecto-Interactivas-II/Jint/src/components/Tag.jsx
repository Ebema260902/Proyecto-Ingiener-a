import { PropTypes } from 'prop-types';

export function Tag({title, bgColor}) {
    return <span className={`${bgColor} rounded-lg px-2 text-center dark:text-white`}>{title}</span>
}

Tag.propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string
}
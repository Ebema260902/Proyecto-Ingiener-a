import { PropTypes } from 'prop-types'
export function ExitIcon({ width, height }) {
    return (
        <svg
            className="w-[24px] h-[24px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
            />
        </svg>
    )
}

ExitIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}

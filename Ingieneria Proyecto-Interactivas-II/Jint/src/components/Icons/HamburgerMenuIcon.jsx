import { PropTypes } from 'prop-types'

export function HamburgerMenuIcon({ width, height }) {
    return (
        <svg
            className={`h-[${height}] text-gray-800 dark:text-white`}
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
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
            />
        </svg>
    )
}

HamburgerMenuIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}

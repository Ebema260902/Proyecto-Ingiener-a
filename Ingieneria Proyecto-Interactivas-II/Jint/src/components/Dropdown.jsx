import { PropTypes } from 'prop-types'

export function Dropdown({ options, onChangeFunction, selectedValue }) {
    return (
        <form className="flex gap-4 items-center">
            <select
                onChange={onChangeFunction}
                value={selectedValue}
                className="w-full border border-gray border-opacity-90 px-4 py-2 rounded-md bg-input-bg bg-opacity-50 dark:bg-dark-secondary dark:text-white xl:w-96"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </form>
    )
}

Dropdown.propTypes = {
    options: PropTypes.array,
    onChangeFunction: PropTypes.func,
}

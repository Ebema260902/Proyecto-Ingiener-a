import { PropTypes } from 'prop-types'

export function InputConfig({ title, inputId, type, value }) {
    return (
        <div className="grid text-zinc-700 dark:text-white">
            <label htmlFor={inputId}>{title}</label>
            <input
                id={inputId}
                type={type}
                className="w-40 h-7 bg-zinc-50 rounded-lg border border-slate-400 p-2 font-secondary dark:bg-dark-secondary"
                value={value}
            />
        </div>
    )
}

InputConfig.propTypes = {
    title: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

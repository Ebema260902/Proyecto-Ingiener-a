import { PropTypes } from 'prop-types'

export function Input({ title, inputId, icon, type = 'text' }) {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={inputId} className='text-white'>{title}</label>
            <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                <label htmlFor={inputId}>
                    {icon}
                </label>
                <input
                    className="w-full outline-none"
                    type={type}
                    placeholder={title}
                    id={inputId}
                />
            </div>
        </div>
    )
}

Input.propTypes = {
    inputId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
    type: PropTypes.string.isRequired,
}

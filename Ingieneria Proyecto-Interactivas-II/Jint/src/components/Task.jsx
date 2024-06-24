import { PropTypes } from 'prop-types'

export function Task({ image }) {
    return (
        <div className="grid grid-cols-2 gap-96 bg-white w-2/5 h-32  shadow-md ml-96 rounded-2xl p-3">
            <div className="grid grid-cols-2 mt-2">
                <img
                    className="w-16 rounded-full m-4"
                    src={`${image}`}
                    alt=""
                />
                <div className="m-5">
                    <span className="font-semibold">Title</span>
                    <p className="w-96">
                        Description of the Event Description of the Event
                    </p>
                </div>
            </div>
            <div className="grid ml-44">
                <span className="ml-12">23:59</span>
                <img className="mt-9" src="../" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}

Task.propTypes = {
    image: PropTypes.string.isRequired,
}

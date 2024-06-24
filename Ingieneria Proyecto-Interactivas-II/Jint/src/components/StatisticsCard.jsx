import { Gauge } from '@mui/x-charts/Gauge'
import { PropTypes } from 'prop-types'

export function StatisticsCard({
    title,
    percentageEvaluated,
    percentageObtained,
}) {
    return (
        <div className="flex flex-col p-4  border border-zinc-400 rounded-xl w-fit dark:bg-dark-secondary dark:text-white">
            <div className='flex w-full'>
                <img
                    className="contain w-full h-full"
                    src="/Los-6-mejores-cursos-gratuitos.jpg"
                    alt=""
                />
            </div>
            <div className="flex flex-col justify-between p-4 text-center gap-4">
                <h3 className="text-center font-bold">{title}</h3>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] gap-4 items-end">
                    <div className="grid justify-center items-center">
                        <Gauge height={100} value={percentageEvaluated} />
                        <p>Percentage of course evaluated</p>
                    </div>
                    <div className="grid justify-center">
                        <h4 className="m-auto text-primary font-bold text-xl">
                            {percentageObtained}%
                        </h4>
                        <p>Percentage of course obtained</p>
                    </div>
                </div>
            </div>
        </div>

        // <div className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] p-4  border border-zinc-400 rounded-xl w-fit dark:bg-dark-secondary dark:text-white">
        //     <img
        //         className="w-[50rem] aspect-video cover h-full"
        //         src="/Los-6-mejores-cursos-gratuitos.jpg"
        //         alt=""
        //     />
        //     <div className="flex flex-col justify-between p-4 text-center gap-4">
        //         <h3 className="text-center font-bold">
        //             {title}
        //         </h3>
        //         <div className="grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] gap-4 items-end">
        //             <div className="grid justify-center items-center">
        //                 <Gauge height={100} value={percentageEvaluated} />
        //                 <p>Percentage of course evaluated</p>
        //             </div>
        //             <div className="grid justify-center">
        //                 <h4 className="m-auto text-primary font-bold text-xl">
        //                     {percentageObtained}%
        //                 </h4>
        //                 <p>Percentage of course obtained</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

StatisticsCard.propTypes = {
    title: PropTypes.string.isRequired,
    percentageEvaluated: PropTypes.number.isRequired,
    percentageObtained: PropTypes.number.isRequired,
}

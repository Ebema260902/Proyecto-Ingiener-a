import { StatisticsCard } from '../components/StatisticsCard.jsx'
import { Resume } from './../components/Resume';

export function StatisticsPage() {
    return (
        <div className="xl:ml-[15rem] p-4 pb-8">
            <section>
                <h2 className="font-bold text-xl dark:text-white">
                    Statistics
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-6 mt-5">
                {/* <div className="grid grid-cols-[repeat(auto-fit,_minmax(600px,_1fr))] gap-4 mt-5"> */}
                    <StatisticsCard title="I-S-2024-PPU- Lectura en Inglés para Informática -001" percentageEvaluated={50} percentageObtained={40}/>
                    <StatisticsCard title="I-S-2024-PPU- Lectura en Inglés para Informática -001" percentageEvaluated={50} percentageObtained={40}/>
                </div>
                <Resume />
            </section>
        </div>
    )
}

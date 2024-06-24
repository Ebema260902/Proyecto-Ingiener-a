export function HorizontalCard({title, initials}) {
    return (
        <a href="#">
            <article className="rounded-xl overflow-hidden border border-zinc-400 w-fit grid dark:bg-dark-secondary">
                <img
                    className="object-cover aspect-[5/2]"
                    src="/Los-6-mejores-cursos-gratuitos.jpg"
                    alt=""
                />
                <div className="p-4">
                    <h3 className="font-bold text-center m-auto dark:text-white">
                        {/* I - S - 2024 - PPU - Desarrollo de Aplicaciones
                        Interactivas II - 001 002 */}
                        {title}
                    </h3>
                    <p className="text-center dark:text-white">{initials}</p>
                </div>
            </article>
        </a>
    )
}

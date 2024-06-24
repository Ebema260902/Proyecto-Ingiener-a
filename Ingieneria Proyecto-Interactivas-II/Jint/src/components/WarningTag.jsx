export function WarningTag({ text }) {

    let bgColor;
    let border;

    if (text === 'Low') {
        bgColor = 'bg-green-600/90';
        border = 'border-green-400';
    }
    else if (text === 'Med') {
        bgColor = 'bg-yellow-500/90';
        border = 'border-yellow-400';
    }
    else if (text === 'High') {
        bgColor = 'bg-red-600/90';
        border = 'border-red-300';
    }

    return (
        <span className={`${bgColor} border-2 ${border} rounded-xl py-1 px-4 absolute top-2 right-2 text-white text-sm font-semibold`}>
            {text}
        </span>
    )
}
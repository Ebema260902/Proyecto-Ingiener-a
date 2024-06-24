import { Calendar } from '../components/Calendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { Dropdown } from '../components/Dropdown'

export function AdminView() {
    const filterOptions = [
        { value: 'all', label: 'All' },
        { value: 'task', label: 'Task' },
        { value: 'event', label: 'Event' },
        { value: 'more', label: 'More' },
    ]
    return (
        <section className="grid xl:grid-cols-2 xl:ml-[15rem] sm:p-10 sm:grid-cols-1  gap-2 dark:bg-dark-primary dark:text-white">
            <div className="m-4 sm:m-12">
                <h1 className="text-4xl font-medium">ASSIGN NEW TASK</h1>
                <div>
                    <h2 className="text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mb-4">
                        Description
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
                        <div>
                            <h1 className="text-xl font-medium m-4">Title</h1>
                            <input
                                type="text"
                                className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white"
                                placeholder="Escribe aquí..."
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-medium m-4">
                                Description
                            </h1>
                            <input
                                type="text"
                                className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white"
                                placeholder="Escribe aquí..."
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mb-4">
                        Specifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
                        <div>
                            <h1 className="text-xl font-medium m-4">Group</h1>
                            <input
                                type="text"
                                className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white"
                                placeholder="Escribe aquí..."
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-medium m-4">Course</h1>
                            <input
                                type="text"
                                className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white"
                                placeholder="Escribe aquí..."
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-medium m-4">Filter</h1>
                            <div className="flex flex-col gap-4">
                                <Dropdown options={filterOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-4">
                    <h2 className="text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mb-4">
                        Date
                    </h2>
                    <div className="pt-8 ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white" />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="mt-12">
                    <button className="rounded-full bg-violet-500 bg-opacity-80 hover:bg-opacity-50 text-xl text-white px-4 py-2">
                        Confirm changes
                    </button>
                </div>
            </div>
            <div className="p-4 sm:p-24">
                <Calendar />
            </div>
        </section>
    )
}

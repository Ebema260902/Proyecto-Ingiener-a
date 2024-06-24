import { useState, useContext } from 'react'
import { HealthCard } from '../components/HealthCard'
import { MedCard } from '../components/MedCard'
import { Dropdown } from '../components/Dropdown'
import { InputConfig } from '../components/InputConfig'
import { modalContext } from '../context/modalContext'




import { useEffect } from 'react'

export function ConfigurationPage() {
    // const [theme, setTheme] = useState('light')
    const {theme, setTheme, user} = useContext(modalContext)
    

    const handleThemeChange = (event) => {
        setTheme(event.target.value)
    }

    useEffect(() => {
        if (theme === 'light') {
            document.querySelector('html').classList.remove('dark')
        } else {
            document.querySelector('html').classList.add('dark')
        }
    }, [theme])

    const filterOptions = [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
    ]

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'unknown', label: 'Unknown' },
    ]

    const sleepRangeOptions = [
        { value: '0-2', label: '0-2 hour' },
        { value: '2-4', label: '2-4 hour' },
        { value: '4-6', label: '4-6 hour' },
        { value: '6-8', label: '6-8 hour' },
        { value: '8-10', label: '8-10 hour' },
    ]

    return (
        <>
            {/* CONFIGURATION */}
            <div className=" grid gap-16 px-4 pb-20 dark:text-white configuration lg:px-[5rem] xl:ml-[16rem] xl:px-0 xl:pt-6">
                <section className="grid text">
                    <div className="grid gap-7 ">
                        <div>
                            <h3 className="text-xl font-semibold">Profile</h3>
                            <img className="mt-2" src="/line.png" alt="" />
                        </div>
                        <section className="grid sm:flex gap-8">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-24 rounded-full bg-black aspect-square"
                                    src="https://unavatar.io/Kevingu08"
                                    alt=""
                                />
                                <span className="text-lg ml-3">
                                    Your Picture
                                </span>
                            </div>
                            <div className="text-base grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 font-medium text-zinc-700">
                                <div className="flex flex-wrap gap-9">
                                    <InputConfig
                                        title="First Name"
                                        inputId="first-name-input"
                                        type="text" 
                                        value={user.name}
                                    
                                    />
                                    <InputConfig
                                        title="Last Name"
                                        inputId="last-name-input"
                                        type="text"
                                        value={user.lastname}

                                    />
                                </div>
                                {/* <div>
                                    <InputConfig
                                        title="Phone Number"
                                        inputId="phone-number-input"
                                        type="text"
                                    />
                                </div> */}
                            </div>
                        </section>
                    </div>
                </section>

                <section className="grid text-2xl gap-7">
                    <div className="grid gap-7">
                        <div>
                            <h3 className="text-xl font-semibold">
                                My Account
                            </h3>
                            <img className="mt-2" src="/line.png" alt="" />
                        </div>
                        <div className="text-base grid gap-2">
                            <div className="grid gap-5">
                                <InputConfig
                                    title="Email"
                                    inputId="email-input"
                                    type="email"
                                    value={user.email}
                                />
                                <a className="w-48 h-7 rounded-lg border-[.12rem] border-primary text-xs font-semibold grid justify-center items-center transition-all duration-100  hover:bg-primary hover:text-white  dark:bg-dark-secondary">
                                    Change Password
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 font-semibold">
                    <div>
                        <h3 className="text-xl font-semibold">Preferences</h3>
                        <img className="mt-2" src="/line.png" alt="" />
                    </div>

                    <div className="text-base gap-8">
                        <div className="grid gap-1">
                            <span>Theme</span>
                            <p className="text-gray text-xs">
                                Customize how Jint looks on your device
                            </p>
                            <Dropdown
                                options={filterOptions}
                                selectedValue={theme}
                                onChangeFunction={handleThemeChange}
                            />
                            
                        </div>
                    </div>
                </section>

                <section className="grid gap-7">
                    <div className="grid gap-7">
                        <div>
                            <h3 className="text-xl font-semibold">
                                Personal Data
                            </h3>
                            <img className="mt-2" src="/line.png" alt="" />
                        </div>
                        <div className="grid gap-6">
                            <InputConfig
                                title="Age"
                                inputId="age-input"
                                type="number"
                            />
                            <div>
                                <span>Gender</span>
                                <Dropdown options={genderOptions} />
                            </div>

                            <div className="grid">
                                <span>Sleep Range</span>
                                <Dropdown options={sleepRangeOptions} />
                            </div>
                        </div>

                        <button className="w-48 h-7 bg-violet-400 rounded-lg border border-sky-600 text-xs font-semibold grid justify-center items-center text-white">
                            Update Profile
                        </button>
                    </div>
                </section>

                <HealthCard
                    healthTitle="Sleep Schedule"
                    healthText="Input the number of hours slept, and save for daily monitoring of your sleep patterns"
                />
                <HealthCard
                    healthTitle="Exercise"
                    healthText="Log your exercise duration, and save to monitor your daily exercise regimen."
                />
                <MedCard
                    medTitle="Medical Information"
                    medText="Add your Medical Information here, and save to monitor your Conditions."
                />

                
            </div>
        </>
    )
}

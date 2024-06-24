import { useContext } from "react"
import { modalContext } from "../context/modalContext"

export function WelcomeCard() {
    const {user} = useContext(modalContext);
    
    console.log(user);
    return (
        <div className="bg-white shadow-main rounded-xl p-8 dark:bg-dark-secondary flex justify-between items-center">
            <div>
                <h3 className="font-semibold dark:text-white">
                    Good Morning{' '}
                    <span className="text-purple-500">{user.name} {user.lastname}</span>
                </h3>
                <p className="dark:text-white">Have a nice day</p>
            </div>
            <div>
                <img className="w-6" src="/Jint-logo.svg" alt="" />
            </div>
        </div>
    )
}

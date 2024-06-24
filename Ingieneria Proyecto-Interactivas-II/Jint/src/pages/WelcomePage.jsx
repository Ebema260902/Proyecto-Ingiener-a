import { NavLink } from 'react-router-dom'
import { ROUTE_PATHS } from '../routes'

export function WelcomePage() {
    return (
        <>
            <div className="min-h-screen bg-primary text-center flex flex-col items-center justify-center p-2 relative">
                <p className="font-primary font-bold text-7xl text-white pt-5 px-10 absolute top-0 left-0">
                    J
                </p>

                <div className="flex items-center justify-center">
                    <h1 className="font-primary text-5xl text-white">
                        Welcome to{' '}
                        <span className="text-white font-bold">Jint</span>
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="text-center font-primary font-light text-3xl text-white pt-16">
                        The Best Way to Manage Your Time
                    </h2>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <NavLink
                        className="font-semibold rounded-full bg-white bg-opacity-30  text-xl text-white px-4 py-2 hover:bg-white hover:text-primary transition-all duration-300"
                        to={ROUTE_PATHS.SIGN_UP}
                    >
                        Get Started Now
                    </NavLink>
                </div>
                <div>
                    <p className="text-center font-primary font-extralight text-xl text-white pt-16">
                        {' '}
                        Do you have an account?{' '}
                        <NavLink
                            className="underline font-bold hover:opacity-50"
                            to={ROUTE_PATHS.LOGIN}
                        >
                            LOGIN
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

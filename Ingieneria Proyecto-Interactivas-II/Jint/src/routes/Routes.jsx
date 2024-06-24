import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { TaskPage } from '../pages/TaskPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { AdminView } from '../pages/AdminView'
import { ConfigurationPage } from '../pages/ConfigurationPage'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'
import { WelcomePage } from '../pages/WelcomePage'
import { ROUTE_PATHS } from '.'

export function Routes() {
    return (
        <ReactRoutes>
            <Route path={ROUTE_PATHS.WELCOME} element={<WelcomePage />} />
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route path={ROUTE_PATHS.TASK} element={<TaskPage />} />
            <Route path={ROUTE_PATHS.STATISTICS} element={<StatisticsPage />} />
            <Route
                path={ROUTE_PATHS.CONFIGURATION}
                element={<ConfigurationPage />}
            />
            <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
            <Route path={ROUTE_PATHS.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTE_PATHS.ADMIN} element={<AdminView />} />
            <Route
                path={ROUTE_PATHS.NOT_FOUND}
                element={<Navigate to={ROUTE_PATHS.HOME} />}
            />
        </ReactRoutes>
    )
}

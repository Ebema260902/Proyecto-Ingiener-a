import { Sidebar } from './components/Sidebar'
import { ModalContextProvider } from './context/modalContext'
import { CardModal } from './components/CardModal'
import { Routes } from './routes/Routes'
import { ROUTE_PATHS } from './routes'
import { useLocation } from 'react-router-dom'

function App() {
    const location = useLocation()
    const showSidebar = ![
        ROUTE_PATHS.LOGIN,
        ROUTE_PATHS.SIGN_UP,
        ROUTE_PATHS.WELCOME,
    ].some((path) => location.pathname.includes(path))

    return (
        <ModalContextProvider>
            {showSidebar && (
                <>
                    <CardModal />
                    <Sidebar />
                </>
            )}

            <Routes />
        </ModalContextProvider>
    )
}

export default App

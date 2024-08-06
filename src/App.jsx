import { Outlet } from 'react-router-dom'


export default function App() {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}
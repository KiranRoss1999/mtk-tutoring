import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Billing from './pages/Billing'
import Booking from './pages/Booking'
import Homework from './pages/Homework'
import Error from './pages/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/Booking',
                element: <Booking />,
            },
            {
                path: '/Billing',
                element: <Billing />
            },
            {
                path: '/Homework',
                element: <Homework />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
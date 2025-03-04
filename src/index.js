import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App'
import { ItemsPage } from './Pages/ItemsPage'
import { Timer } from './components/Timer'
import ErrorPage from './Pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/timer',
                element: <Timer />
            },
            {
                path: '/about',
                element: <div>About us</div>
            },
            {
                path: '/items',
                element: <ItemsPage />
            },

        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
    
)

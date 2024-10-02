import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { AllProjectsPage } from "../pages/all/AllProjectsPage"
import { HomePage } from "../pages/HomePage"

export const Route_Items = [
    { name: "Dashboard", link: "/*", element: <HomePage /> },
    { name: "Home", link: "/AllProjects", element: <AllProjectsPage /> },
]

export const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {
                        Route_Items.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element} />
                            )
                        })
                    }
                </Routes>
            </BrowserRouter>
        </div>
    )
}
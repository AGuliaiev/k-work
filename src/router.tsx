import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviesList} from "./components";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>, children:[
                    {
                        path:':id', element:<MoviesList/>
                    }
                ]
            }
        ]
    }
]);

export {
    router
}
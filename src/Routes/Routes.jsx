import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import AddTouristSpot from "../Pages/TouristSpot/AddTouristSpot";
import Error from "../Pages/ErrorPage/Error";
import TouristSpots from "../Pages/TouristSpot/TouristSpots";
import TouristSpotDetails from "../Pages/TouristSpot/TouristSpotDetails";
import MyList from "../Pages/MyList/MyList";
import PrivetRoute from "./PrivetRoute";
import AllTouristSpots from "../Pages/TouristSpot/AllTouristSpots";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        index: true,
                        element: <TouristSpots></TouristSpots>,
                        loader: () => fetch('http://localhost:3000/touristspots')
                    }
                ]
            },
            {
                path: '/alltouristspots',
                element: <AllTouristSpots />,
                loader: () => fetch('http://localhost:3000/touristspots')
            },
            {
                path: '/touristspot/:id',
                element:
                    <PrivetRoute>
                        <TouristSpotDetails></TouristSpotDetails>
                    </PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/touristspot/${params.id}`)
            },
            {
                path: '/mylist',
                element:
                    <PrivetRoute>
                        <MyList></MyList>
                    </PrivetRoute>
            },
            {
                path: '/register',
                element:<Register></Register>

            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/addTouristSpot',
                element:
                    <PrivetRoute>
                        <AddTouristSpot></AddTouristSpot>
                    </PrivetRoute>
            }
        ]
    }
])

export default router;
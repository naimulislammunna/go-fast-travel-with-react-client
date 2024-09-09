import { useLoaderData } from "react-router-dom";
import TouristSpot from "./TouristSpot";

const AllTouristSpots = () => {
    const spots = useLoaderData();
    console.log(spots);
    return (
        <div className="home-container">
            <h1 className="text-3xl font-semibold text-center my-7">All Tourist Spot</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {
                spots.map(data => <TouristSpot key={data.id} data={data}></TouristSpot>)
            }
            </div>
            
        </div>
    );
};

export default AllTouristSpots;
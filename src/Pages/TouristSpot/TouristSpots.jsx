import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";

const TouristSpots = () => {

    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('../../../public/public.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div className="home-container">
            <h1 className="text-3xl font-semibold text-center my-7">All Tourist Spot</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {
                data.map(data => <TouristSpot key={data.id} data={data}></TouristSpot>)
            }
            </div>
            
        </div>
    );
};

export default TouristSpots;
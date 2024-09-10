import { useLoaderData } from "react-router-dom";

const TouristSpotDetails = () => {
    const data = useLoaderData();

    const { userName, userEmail, imageUrl, country_Name, location, tourists_spot_name, average_cost, totalVisitorsPerYear, travel_time, seasonality } = data;

    return (
        <div className="home-container py-5">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={imageUrl}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <div className="">
                        <h3 className="text-xl font-semibold my-2">{tourists_spot_name}</h3>
                        <div className="flex gap-7 my-3">
                            <p className="flex gap-2 items-center"> {country_Name}</p>
                            <p className="flex gap-2 items-center">{location}</p>

                        </div>
                        <div className="my-3 border-y border-gray-400 py-3">
                            <h3 className="text-lg font-semibold">User Info</h3>
                            <div className="flex gap-7 my-3">
                            <p className="flex gap-2 items-center"> {userName}</p>
                            <p className="flex gap-2 items-center">{userEmail}</p>

                        </div>
                        </div>
                        <div className="flex gap-7 my-3">
                            <p className="flex gap-2 items-center">
                            {average_cost}</p>
                            <p className="flex gap-2 items-center">{totalVisitorsPerYear}</p>

                        </div>
                        <div className="flex gap-3">
                            <p className="bg-slate-200 px-5 py-1 rounded-full">{travel_time}</p>
                            <p className="bg-slate-200 px-5 py-1 rounded-full">{seasonality}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetails;


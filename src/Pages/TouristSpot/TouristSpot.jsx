import { AiFillDollarCircle } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";


const TouristSpot = ({ data }) => {
    const {_id, imageUrl, tourists_spot_name, average_cost, totalVisitorsPerYear, travel_time} = data;

    return (
        <div>
            <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {/* love  */}
                        <div className="flex items-center">
                            <svg width={30} className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
                        </div>
                        <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90 ">{travel_time}</button>
                    </div>
                    <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={imageUrl} alt="card navigate ui" />
                </div>
                <div className="space-y-2 font-semibold">
                    <h6 className="text-sm md:text-base lg:text-lg">{tourists_spot_name}</h6>
                    <div className="flex gap-7">
                        <p className="flex items-center gap-1"><AiFillDollarCircle />{average_cost}</p>
                        <p className="flex items-center gap-1"><IoPeople />{totalVisitorsPerYear}</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm md:text-base justify-end">
                    <Link to={`/touristspot/${_id}`}>
                        <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600 button">View Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default TouristSpot;
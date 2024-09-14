import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTouristSpot = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const imageUrl = form.imageUrl.value;
        const userEmail = form.user_email.value;
        const userName = form.user_name.value;

        console.log(tourists_spot_name, country_Name, location, average_cost, travel_time, totalVisitorsPerYear, imageUrl, userEmail, userName);


        const response = await axios.post('https://go-fast-travel-server.vercel.app/add-tourist-spot', { tourists_spot_name, country_Name, location, average_cost, travel_time, totalVisitorsPerYear,userName, userEmail, imageUrl })
        .then(() => {
            toast('Post Complete')
            form.reset();
        });
        console.log(response);
    }


    return (
        <div>
            <ToastContainer/>
            <div className="home-container">
                <Link to='/'><h2 className="my-4 text-lg font-semibold">{`<-`} Back Home</h2></Link>
                <div className="bg-[#F4F3F0]">
                    <div className="mx-3 sm:mx-20 py-10">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="grid w-full grid-cols-2 gap-4">
                                <div className="space-y-2 text-sm">
                                    <label className="text-sm font-serif font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Tourists spot name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="first_name"
                                        placeholder="tourists_spot_name"
                                        name="tourists_spot_name"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Country Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="first_name"
                                        placeholder="country_Name"
                                        name="country_Name"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                        location
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="first_name"
                                        placeholder="location"
                                        name="location"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Average Cost
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="first_name"
                                        placeholder="average_cost"
                                        name="average_cost"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                        Travel time
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="first_name"
                                        placeholder="travel_time"
                                        name="travel_time"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="last_name">
                                        Total Visitors Per Year
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="last_name"
                                        placeholder="Total Visitors Per Year"
                                        name="totalVisitorsPerYear"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                        User Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="first_name"
                                        placeholder=" User Name"
                                        name="user_name"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="last_name">
                                       User Email
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="last_name"
                                        placeholder="Enter User Email"
                                        name="user_email"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                                    Image URL
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="email"
                                    placeholder="Enter your Image URL"
                                    name="imageUrl"
                                    type="text"
                                />
                            </div>
                            <button type="submit" className="button my-4">Submit</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddTouristSpot;
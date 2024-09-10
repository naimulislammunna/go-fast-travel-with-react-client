import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Navber = () => {
    const { userInfo, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    const items = <>
        <Link to='/'><button className="hover:border-b-2 hover:border-white text-lg font-bold mx-2">Home</button></Link>
        <Link to='/alltouristspots'><button className="hover:border-b-2 hover:border-white text-lg font-bold mx-2">All Tourist Spot</button></Link>
        <Link to='/addTouristSpot'><button className="hover:border-b-2 hover:border-white text-lg font-bold mx-2">Add Tourist Spot</button></Link>
        <Link to='/myList'><button className="hover:border-b-2 hover:border-white text-lg font-bold mx-2">My List</button></Link>

    </>
    return (
        <div className=" bg-green-800">
            <div className="navbar sm:home-container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn p-0 btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <Link to='/'>
                        <a className="text-lg sm:text-3xl  text-white">Go Fast<span className="text-[#00A651] bg-white p-2 rounded-lg ml-3">Travel</span>
                        </a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex  text-white">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end gap-3  text-white">
                    {
                        userInfo ? <>
                            <button onClick={handleLogOut} className="button">Sign Out</button>
                            <h3>{userInfo.displayName}</h3>
                            <div className="w-10">
                                <img className="rounded-full"
                                    alt=""
                                    src={userInfo.photoURL} />
                            </div>
                        </>
                            :
                            <>
                                <Link to='/register'><button className="button">Resister</button></Link>
                                <Link to='/SignIn'><button className="button">Sign In</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;
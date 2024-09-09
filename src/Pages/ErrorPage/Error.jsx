import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center my-4">
            <h1 className="text-3xl text-red-600 font-semibold ">Page Not Found</h1>
            <Link to='/'><button className="button">Home</button></Link>
        </div>
    );
};

export default Error;
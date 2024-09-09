import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";

const PrivetRoute = ({children}) => {
    const {userInfo, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400 flex justify-center my-20"></div>
    }
    if(userInfo){
        return children;
    }
    return <Navigate to='/signIn' state={location.pathname} replace></Navigate>
};

export default PrivetRoute;
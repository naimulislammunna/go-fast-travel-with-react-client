import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Register = () => {
    const {handleRegister, updateUserProfile, loading} = useContext(AuthContext);
    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    if(loading){
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400 flex justify-center my-20"></div>
    }
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setName(form.name.value)
        setPhoto(form.photo.value)
        console.log(name, photo);

        if(!checkPassword.test(password)){
            return toast('password incorrect')
        }
        handleRegister(email, password)
        .then((res) => {
            console.log(res);
            
            // form.reset()
            toast.success('register Successfully');
            navigate(location.state);
            
        })
        .catch(()=> toast.warn('register warning'))

        updateUserProfile(name, photo)
        .then(() => {
            // form.reset()
            toast.success('Update In Successfully');
            navigate(location.state);
        })
        .catch(()=> toast.warn('update warning'))

    }

    return (
        <div className="my-5">
            <ToastContainer></ToastContainer>
            <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                <h1 className="text-3xl font-semibold">Resister</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username" className="block font-medium">
                            Name
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="username"
                            placeholder="Enter name"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="photo" className="block font-medium">
                            Photo Url
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="photo"
                            placeholder="Enter username"
                            name="photo"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username_2" className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <input type="submit" value='Submit' className="w- rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700 cursor-pointer" />
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    I have an account?
                    <Link to='/signIn'><a className="font-semibold underline ">
                        Sign In
                    </a></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
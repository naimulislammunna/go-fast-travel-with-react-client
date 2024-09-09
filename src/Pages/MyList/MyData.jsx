import { toast, ToastContainer } from "react-toastify";
import { MdDelete } from "react-icons/md";
const MyData = ({item}) => {
    const {_id, imageUrl, tourists_spot_name, location} = item;
    
    const handleDelete = () => {

        const procced = confirm('Are you sure delete Spot');
        if (procced) {
            fetch(`http://localhost:3000/mylist/${_id}`,{
                method: "DELETE"
            })
                .then(res => {res.json() 
                    toast('Delete Compelete')
                })
                .then(d => console.log(d))
                .catch(err => console.log(err))
        }
    }
    return (
            <tr className="hover:bg-gray-50 border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src={imageUrl} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">{tourists_spot_name}</td>
                <td className="py-4 px-6 border-b text-xl font-medium">{location}</td>
                <td className="py-4 px-6 border-b">
                    <button className="button">Update</button>
                    <button onClick={handleDelete} className="button my-auto ml-4 cursor-pointer"><MdDelete/></button>
                </td>
            </tr>
    );
};

export default MyData;
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider"

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users");
            toast.success("Logout successfully");
            
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }
        catch (error) {
            console.log(error);
            toast.error(error.message);
            setTimeout(() => { }, 3000);
        }
    }
    return (
        <div>
            <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Logout

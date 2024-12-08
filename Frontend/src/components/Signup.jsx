import { Link,useNavigate } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";


function Signup() {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:1200/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Signup successfully");
                    navigate("/");
                }
                localStorage.setItem("Users",JSON.stringify(res.data.user));
            }).catch((error) => {
                if(error.response){
                    console.log(error);
                    toast.error( error.response.data.message);
                }

            })
    }
    return (
        <div>
            <div className="flex h-screen items-center justify-center">
                <div className="modal-box w-[800px] dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input type="name"
                                className="w-[420px] py-1 px-3 border rounded-md outline-none "
                                placeholder="Enter your fullname"
                                {...register("fullname", { required: true })} />
                            <br />
                            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                            <br />
                            <span>Email</span>
                            <br />
                            <input type="email"
                                className="w-[420px] py-1 px-3 border rounded-md outline-none "
                                placeholder="Enter your email"
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            <br />
                            <span>Password</span>
                            <br />
                            <input type="password"
                                className="w-[420px] py-1 px-3 border rounded-md outline-none "
                                placeholder="Enter your password"
                                {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="flex justify-between mt-5">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                            <p>Already have Account ? {""}<button className="underline text-blue-600 cursor-pointer "
                                onClick={() => { document.getElementById("my_modal_3").showModal() }}>Login</button>{""}<Login /></p>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Signup

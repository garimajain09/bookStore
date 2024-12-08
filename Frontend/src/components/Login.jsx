import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:1200/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Login successfully");
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 1000)
                }

            }).catch((error) => {
                if (error.response) {
                    console.log(error);
                    toast.error(error.response.data.message);
                    setTimeout(()=>{},2000);
                }

            })
    }
    return (
        <div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                className="w-[420px] py-1  px-3 border rounded-md outline-none "
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
                        <div className="flex justify-between mt-4">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
                            <p>Not registered ? {""}<Link to="signup" className="underline text-blue-600 cursor-pointer ">Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>

        </div>
    )
}

export default Login

import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)
    return (
        <div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").closest()}>✕</Link>

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

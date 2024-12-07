import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"


function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)
  return (
    <div>
         <div className="flex h-screen items-center justify-center">
                <div className="modal-box w-[800px] dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                   
                    <h3 className="font-bold text-lg">Signup</h3>
                    <div className="mt-4 space-y-2">
                        <span>Name</span>
                        <br/>
                        <input type="name"
                         className="w-[420px] py-1 px-3 border rounded-md outline-none "
                        placeholder="Enter your fullname"
                        {...register("name", { required: true })}/>
                        <br/>
                        {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        <br/>
                        <span>Email</span>
                        <br/>
                        <input type="email"
                         className="w-[420px] py-1 px-3 border rounded-md outline-none "
                        placeholder="Enter your email"
                        {...register("email", { required: true })}/>
                        <br/>
                        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        <br/>
                        <span>Password</span>
                        <br/>
                        <input type="password" 
                        className="w-[420px] py-1 px-3 border rounded-md outline-none "
                        placeholder="Enter your password"
                        {...register("password", { required: true })}/>  
                        <br/>
                        {errors.password && <span className="text-sm text-red-500">This field is required</span>} 
                    </div>
                    <div className="flex justify-between mt-5">
                        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                        <p>Already have Account ? {""}<button className="underline text-blue-600 cursor-pointer "
                        onClick={()=>{document.getElementById("my_modal_3").showModal()}}>Login</button>{""}<Login/></p>
                    </div>
                    </form>
                </div>
            </div>

      
    </div>
  )
}

export default Signup

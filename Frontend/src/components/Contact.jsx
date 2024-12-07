import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="pt-40 ml-[500px]" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="font-bold text-3xl">Contact Us</h1>
                        <div className="mt-4 space-y-2 ">
                            <span>Name</span>
                            <br />
                            <input type="name"
                                className="w-[420px] py-1 px-3 border rounded-md outline-none dark:text-black"
                                placeholder="Enter your fullname"
                                {...register("name", { required: true })} />
                            <br />
                            {errors.name && <span className="text-sm text-red-500 ">This field is required</span>}
                            <br />
                            <span>Email</span>
                            <br />
                            <input type="email"
                                className="w-[420px] py-1 px-3 border rounded-md outline-none dark:text-black "
                                placeholder="Enter your email"
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            <br />
                            <span>Message</span>
                            <br />
                            <textarea
                                rows='5'
                                className="w-[420px] py-1 px-3 border rounded-md outline-none dark:text-black"
                                placeholder="Type your message"
                                {...register("message", { required: true })} />
                            <br />
                            {errors.message && <span className="text-sm text-red-500">This field is required</span>}
                            <br />
                            <button className="bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-700 duration-200">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact

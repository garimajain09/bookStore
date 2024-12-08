import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, resp) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return resp.status(400).json({ message: "User already exists" });
        }
        const hashPassword =await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        })
        await createdUser.save()
        resp.status(201).json({ message: "User created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        } })
    } catch (error) {
        console.log(error);
        resp.status(500).json({ message: "Internal server error" })
    }
};

export const login=async(req,resp)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatched=await bcrypt.compare(password,user.password);
        if(!user || !isMatched){
            return resp.status(400).json({message:"Invalid username or password"})
        }
        else{
            resp.status(200).json({message:"Login successfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    }catch(error){
        console.log(error);
    }
}
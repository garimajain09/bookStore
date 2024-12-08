import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    price:String,
    image:String,
    title:String
})

const Book=mongoose.model("Book",bookSchema);

export default Book;
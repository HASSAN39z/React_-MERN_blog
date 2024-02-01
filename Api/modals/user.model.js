import mongoose from "mongoose";

const userSchemaa = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    
    },
    email:{
        type :String ,
        require :true,
        unique :true,
    },
    password:{
        type :String ,
        require :true,
    },
},{timestamps: true}
);

const User = mongoose.model('User',userSchemaa)


export default User;
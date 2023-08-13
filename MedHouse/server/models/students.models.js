

import mongoose from "mongoose";


const Student = new mongoose.Schema(
    {
        name: {type:String, required:true},
        email: {type:String, required:true, },
        gender: {type:String, required:true},
        password: {type:String, required:true},
    },
    {
        collection: 'Student-login-data'
    }
)

const model = mongoose.model('StudentData',Student);

export default model


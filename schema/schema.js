import mongoose from "mongoose"

const signupschema = new mongoose.Schema(
    {
        userName:String,
        userEmail:String,
        userPassword:String,
        userImage:String,
        userAdminStatus:Boolean

    }
);
export const SIGINmodel = new mongoose.model("signupdata",signupschema);


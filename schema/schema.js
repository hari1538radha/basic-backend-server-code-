import mongoose from "mongoose"

const signupschema = new mongoose.Schema(
    {
        userName:String,
        userEmail:String,
        userPassword:String,
        userImage:String,
        userAdminStatus:Boolean

    }
)
const productschema = new mongoose.Schema(
    {
        productUrl:String,
        productName:String,
        productPrice:Number
    }
)
export const signupmodel = mongoose.model("signupdata",signupschema);

export const productmodel = mongoose.model("productdata",productschema);

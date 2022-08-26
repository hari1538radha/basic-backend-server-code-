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
export const signupmodel = new mongoose.model("signupdata",signupschema);


const productschema = new mongoose.Schema(
    {
        productUrl:String,
        productName:String,
        productPrice:Number
    }
)

);


export const productmodel =  new mongoose.model("productdata",productschema);

import { productmodel } from "../schema/schema.js";

export const addproductData = (req,res)=>{

    const productData = new productmodel(req.body);
    console.log(req.body)
    productData.save((err,data)=>{
        if(err)
        {
            res.send(err)
        }
        res.send({
            status:200,
            message:"Product data saved !",
            data
        })
    })
}
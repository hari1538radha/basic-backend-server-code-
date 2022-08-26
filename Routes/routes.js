import { productmodel } from "../schema/schema.js";

export const addproductData = (req,res)=>{
    if(req.body.productUrl && req.body.productName && req.body.productPrice)
    {
        const productData = new productmodel(req.body);
        console.log(req.body)
        productData.save((err,data)=>{
            if(err)
            {
                res.send(err)
            }
            res.send({
                status:201,
                message:"Product data saved !",
                data:data
            })
        })
    }
    else
    {
        res.send({
            status:501,
            message:"Kindly recheck your product"
        })
    }
    
}
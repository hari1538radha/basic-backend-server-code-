
import { productmodel ,signupmodel} from "../schema/schema.js";


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


export const signuppage = (req, res) => {


    if (req.body.userName && req.body.userEmail && req.body.userPassword && req.body.userImage && req.body.userAdminStatus) {
       
        const Signup = new signupmodel(req.body);

        Signup.save((err, data) => {
            if (err) {
                return res.send(err)
            }
            return res.send(
                {
                    data,
                    status: 200,
                    message: "user uploded sucessfully",

                }
            );
        })
    }
    else {
        return res.send({
            status: 500,
            message: "enter complete details"

        })
    }

}
export const getdata =(req,res) => {

    if (req.query.userName && req.query.userPassword)
    {
        signupmodel.find({userName:req.query.userName} && {userPassword:req.query.userPassword},
            (err, data) => {
                if(err){
                   return res.send(err)
                }
                else
                {
            
                    return  res.send(data);
                }
             
            })  
    }
    else
    {
        res.send("Plese enter details")
    }
   
}
export const getdetails = (req, res) => {
    productmodel.find((err, data) => {
        if(err)
        {
             return res.send(err)
        }
        
            else {
                if(data == !data)
                {
                    return  res.send("no data found")
                }
                else
                {
                    console.log(data)
                    return res.send({
                        
                        status: 200,
                        message: 'Data got',
                        data:data
                    })
                }
                
            }
            
        
    });
}

import { SIGINmodel } from "../schema/schema.js"

export const signuppage = (req, res) => {


    if (req.body.userName && req.body.userEmail && req.body.userPassword && req.body.userImage && req.body.userAdminStatus) {
       
        const Signup = new SIGINmodel(req.body);

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
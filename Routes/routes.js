
import { SIGINmodel } from "../schema/schema.js"

export const signinpage = (req, res) => {

    console.log(req.body)
    if (req.body.userName && req.body.userEmail && req.body.userPassword && req.body.userImage && req.body.userAdminStatus) {
        console.log('innnnnnnnn');
        const Signin = new SIGINmodel(req.body);

        Signin.save((err, data) => {
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
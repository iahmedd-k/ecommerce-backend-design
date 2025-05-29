import { json } from "express";
import User_Model from "../Models/User_Model.js";


const SignUp = async (req, res)=>{

try {
    
const {
    FirstName,
    LastName,
    email,
    password,
    phone,

}= req.body;

if(!FirstName && !LastName && !email  && !phone && !password)
{
    return res.status(401).json({
        message:"Please fill all the fileds"
    })
}
const finduser = await User_Model.findOne({
    $or: [
        {email}
    ]

})
if(finduser){
    return res.json({
       message: "user already registed"
    })
}



User_Model.create(
    {
        FirstName,
        LastName,
        email,
        password,
        phone
    }
)

return res.status(200).json({
    message: "user registed successfully" 
})
} catch (error) {
    console.error("Error during sign-up:", error); 
    return res.status(500).json({
        message: "unable to save user"
    });
}

}



const LogIn = async( req, res) =>{

    try {

        const {email, password}= req.body;
 
        if(!email && !password){
            return res.status(401).json({
                message:"invalid request"
            })
        }
 const user = await User_Model.findOne({email});
 if(!user){
    return res.status(401).json({
        message:"user doest not exist"
    }
)}
    
        const verifypassword = await user.compare_passwords(password);
        if(!verifypassword)
        {
            return res.json({
                message: "wrong password"
            })
        }
        


        const token = await user.Generate_Token()



        const logInuser  = await User_Model.findById(user._id).select("-password")
    
    return res.status(200).cookie("json", token,{
   httpOnly: true,
       secure: true
    }).json({
        message:"successful login",
        user: logInuser
    })
    } catch (error) {
         console.error("Error during sign-up:", error); 
    return res.status(500).json({
        message: "unable to save user"
    });
    }


    
}


export  {
SignUp,
LogIn

}
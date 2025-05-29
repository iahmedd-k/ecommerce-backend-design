import { Router } from "express";
import { LogIn, SignUp } from "../Controllers/user_contronller.js";

const user_routers= Router();

user_routers.route("/signUp").post(SignUp);
user_routers.route("/login").post(LogIn);



export default user_routers;


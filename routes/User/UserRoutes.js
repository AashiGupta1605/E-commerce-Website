import express from "express"; 
const UserRoutes = express. Router()
import UserReg from '../../controllers/User/UserReg.js'
import UserLogin from '../../controllers/User/UserLogin.js';

UserRoutes.post("/register",UserReg);
UserRoutes.post("/login",UserLogin);

export default UserRoutes;  
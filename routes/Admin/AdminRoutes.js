import express from "express"; 
const AdminRoutes = express. Router()

import TokenVerification from '../../middlewares/TokenVerification.js'

import AdminLogin from '../../controllers/Admin/AdminLogin.js';
import AdminReg from '../../controllers/Admin/AdminReg.js';

import AddItem from '../../controllers/Admin/AddItem.js';
import AddRootCategory from '../../controllers/Admin/AddRootCategory.js';
import AddSubCategory from '../../controllers/Admin/AddSubCategory.js';

import DeleteItem from "../../controllers/Admin/DeleteItem.js";
import DeleteRootCategory from '../../controllers/Admin/DeleteRootCategory.js';
import DeleteSubCategory from "../../controllers/Admin/DeleteSubCategory.js";

import UpdateItem from '../../controllers/Admin/UpdateItem.js';
import UpdateRootCategory from "../../controllers/Admin/UpdateRootCategory.js";
import UpdateSubCategory from "../../controllers/Admin/UpdateSubCategory.js";
import AdminUpdateProfile from '../../controllers/Admin/AdminUpdateProfile.js'

AdminRoutes.post("/login",AdminLogin);
AdminRoutes.post("/register",AdminReg);

AdminRoutes.post("/additem",TokenVerification,AddItem);
AdminRoutes.post("/addrootcategory",TokenVerification,AddRootCategory);
AdminRoutes.post("/addsubcategory",TokenVerification,AddSubCategory);

AdminRoutes.delete("/deleteitem",TokenVerification,DeleteItem.AllDelete);
AdminRoutes.delete("/deleteitem/:id",TokenVerification,DeleteItem.DeleteByID);
AdminRoutes.delete("/deleterootcategory",TokenVerification,DeleteRootCategory.AllDelete)
AdminRoutes.delete("/deleterootcategory/:id",TokenVerification,DeleteRootCategory.DeleteByID)
AdminRoutes.delete("/deletesubcategory",TokenVerification,DeleteSubCategory.AllDelete)
AdminRoutes.delete("/deletesubcategory/:id",TokenVerification,DeleteSubCategory.DeleteByID)

AdminRoutes.put("/updateitem/:id",TokenVerification,UpdateItem)
AdminRoutes.put("/updaterootcategory/:id",TokenVerification,UpdateRootCategory)
AdminRoutes.put("/updatesubcategory/:id",TokenVerification,UpdateSubCategory)
AdminRoutes.patch("/updateprofile/:id",TokenVerification,AdminUpdateProfile)

export default AdminRoutes;  



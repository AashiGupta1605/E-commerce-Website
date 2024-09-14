import express from "express"; 
const ItemRoutes = express. Router()

import TokenVerification from '../../middlewares/TokenVerification.js'

import DisplayItems from "../../controllers/Item/DisplayItems.js";
import DisplayRootCategories from "../../controllers/Item/DisplayRootCategories.js";
import DisplaySubCategories from "../../controllers/Item/DisplaySubCategories.js";

// ItemRoutes.get("/getitems",TokenVerification,DisplayItems.getAll)
// ItemRoutes.get("/getitems/:item?/:category?",TokenVerification,DisplayItems.getByName)

// ItemRoutes.get("/getcategories",TokenVerification,DisplayRootCategories.getAll)
// ItemRoutes.get("/getcategories/:category",TokenVerification,DisplayRootCategories.getByName)

// ItemRoutes.get("/getstylecategories",TokenVerification,DisplaySubCategories.getAll)
// ItemRoutes.get("/getstylecategories/:category",TokenVerification,DisplaySubCategories.getByName)

ItemRoutes.get("/getitems",DisplayItems.getAll)
ItemRoutes.get("/getitems/:item?/:category?",DisplayItems.getByName)

ItemRoutes.get("/getcategories",DisplayRootCategories.getAll)
ItemRoutes.get("/getcategories/:category",DisplayRootCategories.getByName)

ItemRoutes.get("/getstylecategories",DisplaySubCategories.getAll)
ItemRoutes.get("/getstylecategories/:category",DisplaySubCategories.getByName)

export default ItemRoutes;
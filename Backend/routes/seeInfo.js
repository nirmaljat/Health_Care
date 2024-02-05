import  express  from "express";
import { getInfo } from "../controler/seeInfo.js";
import { isAuthenticated } from "../middleware/auth.js";

const router=express.Router();
router.post("/health",isAuthenticated,getInfo)


export default router;
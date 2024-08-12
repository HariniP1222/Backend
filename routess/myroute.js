import express from "express";
const router=express.Router();
import { create } from "../Controller/userController.js";
import { fetch,update } from "../Controller/userController.js";


router.post("/create",create);
router.get("/fetch",fetch);
router.put("/update/:id",update);

export default router;
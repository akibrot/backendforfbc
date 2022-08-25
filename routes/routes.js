import express from "express";
import { getpostpost, savepost, welcome } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", welcome);
router.post("/savepost", savepost);
router.get("/getpost", getpostpost);


export default router;

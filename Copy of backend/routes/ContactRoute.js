import express from "express";
import { getcontacts, createcontact } from "../controllers/ContactController.js";

const router = express.Router();

router.get("/contacts", getcontacts);
router.post("/contacts", createcontact);

export default router;

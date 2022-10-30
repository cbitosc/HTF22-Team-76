import express from "express";
import { getContacts,
    getcontactsById, 
    createcontact, 
    deletecontact, 
    updatecontact 
} from "../controllers/ContactController.js";

const router = express.Router();

router.get("/contacts", getContacts);
router.get('/contacts/:id', getcontactsById);
router.post("/contacts", createcontact);
router.delete("/contacts/:id",deletecontact);
router.patch("/contacts/:id",updatecontact);

export default router;


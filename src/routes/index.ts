import { Router } from "express";
import { Profile } from "../controllers";

const router = Router();

const createProfileController = new Profile();

router.post('/create', (req, res, next) => createProfileController.create(req, res, next));

export default router;
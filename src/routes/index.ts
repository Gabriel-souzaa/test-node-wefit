import { Router } from "express";
import { Profile } from "../controllers";

const router = Router();

const profileController = new Profile();

router.post('/profile/create', (req, res, next) => profileController.create(req, res, next));
router.delete('/profile/:id', (req, res, next) => profileController.delete(req, res, next));

export default router;
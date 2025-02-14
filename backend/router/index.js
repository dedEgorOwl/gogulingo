import { Router } from "express";
import UserController from "../controllers/user-controller.js";

const router = Router();

import { body } from "express-validator";
import AuthMiddleware from "../middleware/auth-middleware.js";

router.post("/registration", body("email").isEmail(), body("password").isLength({ min: 3, max: 32 }), UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users", AuthMiddleware, UserController.getUsers);

export { router };

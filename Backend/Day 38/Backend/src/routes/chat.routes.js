import { Router } from "express";
import { sendMessageController } from "../controllers/chat.controller.js";
import { authUserMiddleware } from "../middleware/auth.middleware.js";

const chatRouter = Router();

chatRouter.post("/message", authUserMiddleware, sendMessageController);

export default chatRouter;

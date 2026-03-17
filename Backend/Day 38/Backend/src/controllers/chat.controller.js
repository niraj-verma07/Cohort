import { genrateChatTitle, genrateResponse } from "../services/ai.service.js";
import chatModel from "../models/chat.model.js";
import messageModel from "../models/message.model.js";

export async function sendMessageController(req, res) {
  const { message, chat: chatId } = req.body;

  const title = await genrateChatTitle(message);

  const result = await genrateResponse(message);

  const chat = await chatModel.create({
    user: req.user.id,
    title,
  });

  const userMessage = await messageModel.create({
    chat: chat._id,
    content: message,
    role: "user",
  });

  const aiMessage = await messageModel.create({
    chat: chat._id,
    content: result,
    role: "ai",
  });

  res.status(201).json({
    title: title,
    aiMessage: result,
    chat,
    aiMessage,
  });
}

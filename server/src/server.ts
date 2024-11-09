import mongoose from "mongoose";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import CategoryRoutes from "./routes/category.route";
import PostRoutes from "./routes/post.route";
import UserRoutes from "./routes/user.route";
import ChatroomRoutes from "./routes/chatroom.route";
import ChatRoutes from "./routes/chat.route";
import ReviewRoutes from "./routes/review.route";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/categories", CategoryRoutes);
app.use("/api/posts", PostRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/chatrooms", ChatroomRoutes);
app.use("/api/chats", ChatRoutes);
app.use("/api/reviews", ReviewRoutes);

app.get("/", (_: Request, res: Response) => {
  res.send("API Running");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    app.listen(8080, () => console.log(`Server running on port 8080`));
  } catch (error) {
    console.error(error);
  }
};

start();
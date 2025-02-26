import { Router } from "express";
import userRouter from "./user/index.js";
import postRouter from "./post/index.js";
import commentRouter from "./comment/index.js";
import followerRouter from "./follower/index.js";

const allRoutes = Router();

allRoutes.use("/users", userRouter);
allRoutes.use("/posts", postRouter);
allRoutes.use("/comments", commentRouter);
allRoutes.use("/follower", followerRouter);

export default allRoutes;

import express from "express";
import { addUser, claimPoints, getLeaderboard } from "../controllers/userController.js";

const router = express.Router();

router.get("/leaderBoard", getLeaderboard)
router.post("/addUser", addUser)
router.post("/claim", claimPoints)

export default router;

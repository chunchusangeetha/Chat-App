// routes/protectedRoute.ts
import express, { Response } from "express";
import { authenticateFirebaseToken, AuthenticatedRequest } from "../middleware/authMiddleware";

const router = express.Router();

router.get(
  "/protected",
  authenticateFirebaseToken,
  (req: AuthenticatedRequest, res: Response) => {
    res.json({
      message: "You are authenticated!",
      uid: req.user?.uid,
    });
  }
);

export default router;

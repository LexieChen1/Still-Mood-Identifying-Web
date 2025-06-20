import express from "express";
import Bill from "../models/Bill.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(403).json({ msg: "Invalid token" });
  }
};

// POST /api/bills - create a new bill
router.post("/", verifyToken, async (req, res) => {
  try {
    const { event, amount, participants } = req.body;
    const bill = await Bill.create({
      event,
      amount,
      participants,
      createdBy: req.userId
    });
    res.status(201).json(bill);
  } catch (err) {
    res.status(500).json({ msg: "Error creating bill" });
  }
});

export default router;
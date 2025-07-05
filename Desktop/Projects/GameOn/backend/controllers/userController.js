import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from "../../database/index.js";
import { createUser, getUserByEmail, getAllUsers } from '../models/userModel.js';

export const getAllRegisteredUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({
      users: users.map(user => ({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        createdAt: user.created_at
      }))
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const getUserHouse = async (req, res) => {
  const uid = req.user.uid;
  console.log("Looking up house for UID:", uid);


  try {
    const result = await pool.query(
      `SELECT h.name AS house_name, h.invite_code, h.start_date, h.end_date
       FROM users u
       LEFT JOIN houses h ON u.house_id = h.id
       WHERE u.uid = $1`,
      [uid]
    );

    console.log("House result:", result.rows);


    res.json(result.rows[0] || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch house" });
  }
};

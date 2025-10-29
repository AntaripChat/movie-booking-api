import { Request, Response } from "express";
import prisma from "../config/db.config";
import argon2 from "argon2";

export const signUpUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Missing required fields", status: "error" });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({ message: "Password must be at least 6 characters", status: "error" });
    return;
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(409).json({ message: "User already exists", status: "error" });
      return;
    }

    // ✅ Hash password using Argon2
    const hashedPassword = await argon2.hash(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(201).json({
      user: newUser,
      message: "User created successfully",
      status: "success",
    });
  } catch (error) {
    console.error("Sign-up error:", error);
    res.status(500).json({ message: "Internal server error", status: "error" });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Missing required fields", status: "error" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ message: "Invalid credentials", status: "error" });
      return;
    }

    // ✅ Compare password using Argon2
    const isPasswordValid = await argon2.verify(user.password, password);

    if (isPasswordValid) {
      res.json({
        message: "Sign-in successful",
        status: "success",
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } else {
      res.status(401).json({ message: "Invalid credentials", status: "error" });
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    res.status(500).json({ message: "Internal server error", status: "error" });
  }
};

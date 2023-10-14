import { NextFunction, Response, Request as ExpressRequest } from "express";
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

interface Request extends ExpressRequest {
  cookies: {
    [key: string]: string;
  };
}

router.get("/user", async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json("no token provided");
  }
  try {
    const user = await jwt.verify(token, process.env.SECRET, {});
    if (!user) {
      res.status(404).json("jwt error: not found");
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

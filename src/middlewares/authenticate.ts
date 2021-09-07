import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return res.status(401).send({
        message: 'user went wrong',
      });
    }
    const userInfo = jwt.verify(
      authHeader,
      process.env.ACCESS_TOKEN_SECRET || 'deptraivocung'
    );
    console.log(userInfo);

    if (userInfo) {
      req.body.user = userInfo;
      next();
      return res.status(201).send({
        message: 'login successfully',
        code: '201',
      });
    }
    return res.status(401).send({
      message: 'user went wrong',
    });
  } catch (error) {
    return res.status(401).send({
      message: 'something went wrong',
    });
  }
}

import { accounts } from './../sequelize/models/accounts';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

class AccountController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const checked = await accounts.findOne({
        where: {
          username: username,
          password: password,
        },
      });
      if (checked) {
        const accessToken = jwt.sign(
          checked.toJSON(),
          process.env.ACCESS_TOKEN_SECRET || 'deptraivocung',
          {
            expiresIn: '1h',
          }
        );
        return res.status(201).json({ accessToken: accessToken });
      } else {
        return res.status(401).send('access denied');
      }
    } catch (error) {
      return res.send('something went wrong');
    }
  }
  async getUsers(req: Request, res: Response) {
    try {
      const users = await accounts.findAll();
      return res.send(users);
    } catch (error) {
      return res.send('something went wrong');
    }
  }
}
export default new AccountController();

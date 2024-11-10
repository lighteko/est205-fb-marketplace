import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).send(user);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await UserService.getUser(req.params.id);
      res.status(200).send(user);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      res.status(200).send(user);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await UserService.deleteUser(req.params.id);
      res.sendStatus(204);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default new UserController();

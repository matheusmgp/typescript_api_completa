import express, { Router } from "express";
import { resolveDependencies } from "../config/dependency.resolver";

export class UserRoutes {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  protected registerRoutes(): void {
    this.router.get("/users", async (req, res) => {
      const { body, statusCode } =
        await resolveDependencies().userController.getAll();
      res.status(statusCode).json(body);
    });

    this.router.post("/users", async (req, res) => {
      const { body, statusCode } =
        await resolveDependencies().userController.create(req.body);
      res.status(statusCode).json(body);
    });
  }
}

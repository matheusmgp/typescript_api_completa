import express, { Router } from "express";
import { resolveDependencies } from "../config/resolve.dependencies";

export class UserRoutes {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  protected registerRoutes(): void {
    this.router.get("/users", async (req, res) => {
      const { body, statusCode } =
        await resolveDependencies().getUserController.handle();
      res.status(statusCode).json(body);
    });

    this.router.post("/users", async (req, res) => {
      const { body, statusCode } =
        await resolveDependencies().createUserController.handle(req.body);
      res.status(statusCode).json(body);
    });
  }
}

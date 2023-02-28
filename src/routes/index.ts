import { Router } from "express";

import { UserRoutes } from "./user.routes";

const router = Router();

router.use(new UserRoutes().router);

export { router };

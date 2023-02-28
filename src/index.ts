import express from "express";
import { config } from "dotenv";
import { GetUserController } from "./controllers/get-users/get.users.controller";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo.get.users";
import { MongoClient } from "./database/mongo";
import { CreateUserController } from "./controllers/create-user/create.user.controller";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo.create.user";
import { router } from "./routes";

const init = async () => {
  config();
  const app = express();
  app.use(express.json());
  app.use(router);
  await MongoClient.connect();

  const port = process.env.PORT || 3333;
  app.listen(port, () => console.log("App running on port " + port));
};

init();

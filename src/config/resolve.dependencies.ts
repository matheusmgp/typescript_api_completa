import { CreateUserController } from "../controllers/create-user/create.user.controller";
import { GetUserController } from "../controllers/get-users/get.users.controller";
import { MongoCreateUserRepository } from "../repositories/create-user/mongo.create.user";
import { MongoGetUsersRepository } from "../repositories/get-users/mongo.get.users";

export const resolveDependencies = () => {
  const getUserController = new GetUserController(
    new MongoGetUsersRepository()
  );
  const createUserController = new CreateUserController(
    new MongoCreateUserRepository()
  );

  return { getUserController, createUserController };
};

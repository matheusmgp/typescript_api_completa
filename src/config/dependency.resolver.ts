import { CreateUserController } from "../controllers/create-user/create.user.controller";
import { GetUserController } from "../controllers/get-users/get.users.controller";
import { UserController } from "../controllers/user.controller";
import { MongoCreateUserRepository } from "../repositories/create-user/mongo.create.user";
import { MongoGetUsersRepository } from "../repositories/get-users/mongo.get.users";
import { UserRepository } from "../repositories/user.repository";

export const resolveDependencies = () => {
  const getUserController = new GetUserController(
    new MongoGetUsersRepository()
  );
  const createUserController = new CreateUserController(
    new MongoCreateUserRepository()
  );

  const userController = new UserController(new UserRepository());

  return { getUserController, createUserController, userController };
};

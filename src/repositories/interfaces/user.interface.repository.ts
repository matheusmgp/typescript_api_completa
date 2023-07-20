import { IBaseRepository } from "./base.interface.repository";

export interface IUserRepository<IUser> extends IBaseRepository<IUser> {
  funcaoUnicaDoUserRepository(): Promise<IUser>;
}

import { MailtrapMailProvider } from "../../providers/implementations/MAiltrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUserRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider
)


const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController, createUserUseCase }

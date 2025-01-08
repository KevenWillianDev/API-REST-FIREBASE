import { userModel, userModelData } from "../../models/user/user.model";
import { UsersRepository } from "../../repositories/user.repository";
import { userValidator } from "../../validations/";

export class CreateUser {
    usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }   

    async handle(data: userModelData): Promise<userModel>{
        await userValidator.validate(data, { abortEarly: true});
        console.log(data);
        const user = await this.usersRepository.create({
            name: data.name
        });

    return user;
  }
}

import { userModel, userModelData } from "../../models/user/user.model";
import { UsersRepository } from "../../repositories/user.repository";
import  userValidator  from "../../validations/user.validator";

export class createUser {
    usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }   
 
    async handle(data: userModelData): Promise<userModel> {
        await userValidator.validate(data, { abortEarly: true});
        const user = await this.usersRepository.create({
            name: data.name
        });
        console.log(user);
    return user;
  }
}

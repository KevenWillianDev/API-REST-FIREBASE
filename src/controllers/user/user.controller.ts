import {userModel, type userModelData } from "../../models/user/user_model";

interface UsersRepository {
    create(data: userModelData): Promise<userModel>;
}

export class CreateUser {
    usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(data: userModelData): Promise<userModel>{
        data 
        console.log(data);
        const user = await this.usersRepository.create({
            name: data.name
        });

    return user;
  }
}

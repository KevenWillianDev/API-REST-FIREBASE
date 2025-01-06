import userModel from "../../models/user/user_model";

interface UsersRepository {
    create(data: userModel): Promise<userModel>;
}

interface userModelData {
    name: string
}

export class CreateUser {
    usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(data: userModelData): Promise<userModel>{
        data 
    const user = await this.usersRepository.create({
        id: 1,
        name: ''
    });

    return user;
  }
}

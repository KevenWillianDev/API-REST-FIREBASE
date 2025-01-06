import userModel from "../models/user/user_model";

interface userModelData {
    name: string
}

export class UsersRepository{
    async create(data: userModel): Promise<userModel> {
        const {name} = data;

        var user: userModel = {
            id: 1,
            name: ''
        };
        return user;
    }
}
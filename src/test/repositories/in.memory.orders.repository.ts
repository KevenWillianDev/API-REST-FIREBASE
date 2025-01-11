import type { userModel, userModelData } from "../../models/user/user.model"

export class InMemoryUsersRepository {
    items: userModel[] = []
  
    async create(data: userModelData): Promise<userModel> {
      const { name } = data
  
      const user: userModel = {
        id: '1',
        name
      }
      
      this.items.push(user)
  
      return user
    }
  }
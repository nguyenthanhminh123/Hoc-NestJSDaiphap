import { UserDto } from "../user.dto";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(userRepository: UserRepository) {
  }
  createUser(user: any) : any {
    user.createdAt= new Date();
    user.id=1;
    user.updateAt = new Date();
    return UserDto.plainToClass(user);
  }

}
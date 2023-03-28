import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "../user.dto";

@Injectable()
export class UserService {

  createUser(user: any) : any {

    user.createdAt= new Date();
    user.id=1;
    user.updateAt = new Date();
    return UserDto.plainToClass(user);
  }

}
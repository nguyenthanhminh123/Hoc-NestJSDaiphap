import { Inject, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { UsersDto } from "../user.dto";

@Injectable()
export class UserService {
  create(user: UsersDto): UsersDto {
    // todo something insert to datavase
    return user;
  }
}
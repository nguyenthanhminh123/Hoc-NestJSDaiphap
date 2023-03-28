import { Body, Controller, Post } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { UserDto } from "../user.dto";
import { UserService } from "./users.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {

  }

  @Post()
  createUser(@Body() user: UserDto): UserDto{
    return plainToInstance(UserDto,this.userService.create(user));
  }

}
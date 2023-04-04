import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserDto } from "../user.dto";
import { plainToClass } from "class-transformer";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";

@Controller("users")
export class UserController {
  userService: UserService;
  constructor() {
    const userRepository = new UserRepository();
    this.userService = new UserService(userRepository);
  }
  @Post()
  createUser(@Body() user: UserDto): UserDto{
    return this.userService.createUser(user)
  }
  @Get(':id')
  getUserById(@Param('id')  id: number){
    return 'test'
  }

}
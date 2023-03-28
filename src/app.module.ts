import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { UserService } from "./users/users.service";

@Module({
  imports:[UsersModule],
  providers:[
    {
      provide: 'App_USER',
      useClass: UserService
    }
  ]
})
export class AppModule{

}
import { Module } from "@nestjs/common";
import { UsersModule } from "./users/user.module";
import { UserService } from "./users/user.service";

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
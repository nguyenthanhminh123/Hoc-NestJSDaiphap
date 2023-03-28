import { Module } from "@nestjs/common";
import { StoreConfig } from "src/store/store.config";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";


const configLivee = {
  appId: 'Livee001',
  appSecret: 'Livee001'
}

@Module({
  controllers:[UserController],
  providers:[
    UserService,
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'user',

      } as StoreConfig,
    },
  ],
})

export class UsersModule {}
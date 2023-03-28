import { Module } from "@nestjs/common";
import { StoreConfig } from "src/store/store.config";
import { StoreService } from "./store.service";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
function createStore(): StoreService {
  return new StoreService();
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
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
    }
  ],
})

export class UsersModule {}
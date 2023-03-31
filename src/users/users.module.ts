import { Module } from "@nestjs/common";
import { StoreConfig } from "src/store/store.config";
import { StoreService } from "./store.service";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
function createStore(config: StoreConfig): StoreService {
  console.log(config);
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
      inject: [
        {
          token: 'STORE_CONFIG',
          optional: true,
        }
      ]
    }
  ],
})

export class UsersModule {}
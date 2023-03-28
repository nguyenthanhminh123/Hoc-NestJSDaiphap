import { Inject, Injectable } from "@nestjs/common";
import { StoreConfig } from "src/store/store.config";
import { UsersDto } from "../user.dto";

@Injectable()
export class UserService {
  constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig) {
    console.log(storeConfig);
  }

  create(user: UsersDto): UsersDto {
    return user;
  }
}
import { Inject, Injectable } from "@nestjs/common";
import { StoreConfig } from "src/store/store.config";
import { UsersDto } from "../user.dto";
import { StoreService } from "./store.service";

@Injectable()
export class UserService {
  constructor(
    @Inject('STORE_CONFIG') storeConfig: StoreConfig,
    @Inject('STORE_SERVICE') private StoreService: StoreService,
  ) {}

  create(user: UsersDto): UsersDto {
    this.StoreService.save(user);
    return user;
  }
}
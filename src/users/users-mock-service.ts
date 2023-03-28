import { UsersDto } from "./users.dto";

export class UsersMockService {
  create(:UsersDto): UsersDto {
    return {
      name: 'minh name',
      password: 'minhPassword',
      username: 'minhTB'
    }
  }
}
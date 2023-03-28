import { IsEmpty, IsNotEmpty, Length } from "class-validator";
import { Expose, Transform } from "class-transformer";
import { BaseDto } from "./common/base.dto";

export class UserDto extends BaseDto{
  @IsNotEmpty()
  @Expose()
  username: string;

  firstName: string;

  lastName: string;

  @Expose()
  @Transform(({obj})=> obj.firstName + '' +obj.lastName)
  fullName: string;

  @IsNotEmpty()
  @Length(10, 20)
  @Expose()
  password: string;
};
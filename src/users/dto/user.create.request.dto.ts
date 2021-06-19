import { ApiProperty } from "@nestjs/swagger";

export class UserCreateReqDto {

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  password: string;

}
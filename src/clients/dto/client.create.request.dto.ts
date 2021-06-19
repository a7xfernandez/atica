import { ApiProperty } from "@nestjs/swagger";

export class ClientCreateReqDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  passwordConfirmation: string;
}
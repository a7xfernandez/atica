import { ApiProperty } from "@nestjs/swagger";

export class UserResDto {
  
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

}
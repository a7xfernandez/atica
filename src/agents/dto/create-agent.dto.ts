import { ApiProperty } from "@nestjs/swagger";

export class CreateAgentDto {
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
  password: string;
}

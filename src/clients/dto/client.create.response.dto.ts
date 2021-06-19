import { ApiProperty } from "@nestjs/swagger";

export class ClientCreateResDto {
  @ApiProperty()
  id: string;

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
  email: string;
}
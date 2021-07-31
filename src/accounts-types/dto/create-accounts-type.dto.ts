import { ApiProperty } from "@nestjs/swagger";

export class CreateAccountsTypeDto {
  @ApiProperty()
  userType: string;
  @ApiProperty()
  isActive: string;
}

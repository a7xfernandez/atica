import { ApiProperty } from "@nestjs/swagger";

export class AccountsTypeDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userType: string;
  @ApiProperty()
  isActive: string;
 
  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}

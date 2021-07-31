import { ApiProperty } from "@nestjs/swagger";

export class AccountsTypeDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userType: string;
  @ApiProperty()
  isActive: string;
  @ApiProperty()
  created!: Date;
  @ApiProperty()
  updated!: Date;
  @ApiProperty()
  deletedAt?: Date;
}

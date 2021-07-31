import { ApiProperty } from "@nestjs/swagger";

export class CreatePackageDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  weigth: number;
  @ApiProperty()
  WightUnits: string;
  @ApiProperty()
  volumen: number;
  @ApiProperty()
  units: string;
  @ApiProperty()
  large: number;
  @ApiProperty()
  heigth: number;
  @ApiProperty()
  width: number;
  @ApiProperty()
  created!: Date;
  @ApiProperty()
  updated!: Date;
  @ApiProperty()
  deletedAt?: Date;
}

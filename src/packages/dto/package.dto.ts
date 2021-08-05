import { ApiProperty } from "@nestjs/swagger";

export class PackageDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  weigth: number;
  @ApiProperty()
  wightUnits: string;
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

  created!: Date;

  updated!: Date;

  deletedAt?: Date;
}

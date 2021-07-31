import { ApiProperty } from "@nestjs/swagger";

export class CreatePackageDto {
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
}

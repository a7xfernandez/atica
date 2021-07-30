export class CreatePackageDto {
  description: string;
  weigth: number;
  WightUnits: string;
  volumen: number;
  units: string;
  large: number;
  heigth: number;
  width: number;
  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}

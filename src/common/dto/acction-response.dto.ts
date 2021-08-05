import { ApiProperty } from "@nestjs/swagger";

export class AcctionResponseDto {
  @ApiProperty()
  generatedMaps: Array<object>;
  @ApiProperty()
  raw: Array<object>;
  @ApiProperty()
  affected: number;
}
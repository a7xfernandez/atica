import { ApiProperty } from "@nestjs/swagger";

export class EmbarcationDataDto{
    @ApiProperty()
    logisticOperator:number;
}
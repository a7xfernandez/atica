import { ApiProperty } from "@nestjs/swagger";

export class CreateEmbarcationDto {
    @ApiProperty()
    EstimatedDepartureDate: Date;

    @ApiProperty()
    EstimatedArrivingDate: Date;

    @ApiProperty()
    VeselNumber: string;

    @ApiProperty()
    LogisticOperatorId: number;
}

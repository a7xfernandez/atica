import { ApiProperty } from "@nestjs/swagger";

export class EmbarcationDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    EstimatedDepartureDate: Date;
    @ApiProperty()
    EstimatedArrivingDate: Date;
    @ApiProperty()
    VeselNumber: string;
    @ApiProperty()
    LogisticOperatorId: number;

    created!: Date;
  
    updated!: Date;
  
    deletedAt?: Date;
}
import { ApiProperty } from "@nestjs/swagger";
import { TrackingDto } from "src/trackings/dto/tracking.dto";

export class CreateEmbarcationDto {
    @ApiProperty()
    EstimatedDepartureDate: Date;

    @ApiProperty()
    EstimatedArrivingDate: Date;

    @ApiProperty()
    VeselNumber: string;

    @ApiProperty()
    LogisticOperatorId: number;
    @ApiProperty()
    WeigthCapacity:number;
    @ApiProperty()
    WeigthCapacityUsed:number;
    @ApiProperty({type:TrackingDto})
    tracking:TrackingDto;
}

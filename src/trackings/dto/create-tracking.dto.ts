import { ApiProperty } from "@nestjs/swagger";
export class CreateTrackingDto {
    @ApiProperty()
    description: string;  
}

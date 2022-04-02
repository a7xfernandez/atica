import { ApiProperty } from "@nestjs/swagger";
export class TrackingDto{
    @ApiProperty()
    id: number;

    @ApiProperty()
    description: string;
}
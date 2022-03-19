import { ApiProperty } from "@nestjs/swagger";

export class serviceTypDto{
    @ApiProperty()
    id: number;

    @ApiProperty()
    description: string;
}
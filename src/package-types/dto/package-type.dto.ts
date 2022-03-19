import { ApiProperty } from "@nestjs/swagger";

export class packageTypeDto{    
    @ApiProperty()
    id: number;

    @ApiProperty()
    description: string;    
}
import { ApiProperty } from "@nestjs/swagger";

export class addressTypeDto{
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    description: string;
   
    created!: Date;
    updated!: Date;
    deletedAt?: Date;

}
import { ApiProperty } from "@nestjs/swagger";
export class CreateServiceTypeDto {
    @ApiProperty()
    description: string;  
}

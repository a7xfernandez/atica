import { ApiProperty } from "@nestjs/swagger";
export class CreatePackageTypeDto {
    @ApiProperty()
    description: string;  
}

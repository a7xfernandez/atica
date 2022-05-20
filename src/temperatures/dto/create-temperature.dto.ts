import { ApiProperty } from "@nestjs/swagger";

export class CreateTemperatureDto {
    @ApiProperty()
    temperatureCelcius:number;
    @ApiProperty()
    apiKey:string;
}

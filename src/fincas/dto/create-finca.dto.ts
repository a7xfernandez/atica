import { ApiProperty } from "@nestjs/swagger";
import { CompanyDto } from "src/companies/dto/company.dto";

export class CreateFincaDto {
    @ApiProperty({type:CompanyDto})
    company: CompanyDto
}

import { ApiProperty,PartialType } from "@nestjs/swagger";
import { CreateCompanyDto } from './create-company.dto';

export class CompanyDto extends PartialType(CreateCompanyDto){
    @ApiProperty()
    id: number;
}
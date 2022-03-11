import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
  
    @ApiProperty()
    description: string;
    
    @ApiProperty()
    logoPath: string;

    @ApiProperty()
    officeInfo: string;

    @ApiProperty()
    wareHouseInfo: string;

    @ApiProperty()
    officeDirection: string;

    @ApiProperty()
    wareHouseDirection: string;

    @ApiProperty()
    officePhone: string;

    @ApiProperty()
    wareHousePhone: string;

    @ApiProperty()
    officeFax: string;

    @ApiProperty()
    wareHouseFax: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    webSite: string;    

    @ApiProperty()
    slogan: string;
}

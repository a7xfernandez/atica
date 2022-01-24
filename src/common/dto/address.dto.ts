import { ApiProperty } from "@nestjs/swagger";

export class addressDto{   
  
  @ApiProperty()  
  street:string;
  
  @ApiProperty()
  suite:string;
  
  @ApiProperty()
  city:string;
  
  @ApiProperty()
  state:string;
  
  @ApiProperty()
  zipcode:string;
  
  @ApiProperty()
  country:string;        
}
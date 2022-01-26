import { ApiProperty } from "@nestjs/swagger";
import { AccountDto } from "src/accounts/dto/account.dto";
import { CustomerDto } from "./CustomerDto";

export class customerPaginatedDto{
    @ApiProperty()
    CustomerCant: number;


    @ApiProperty({type:[AccountDto]})
    customers: AccountDto[];

}
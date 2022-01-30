import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CommonService {
  private readonly saltRounds = 10;

  async VerifyPassword(password: string, compare: string): Promise<boolean> {
    return await bcrypt.compare(password, compare);
  }

  async hashPassword(password: string){
    const salt = await  bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }
  raiseErrorUniqueEmail(raiseError: boolean)
  {
    if(raiseError)
    {      
      throw new HttpException({
        status:HttpStatus.ACCEPTED,
        error:'email must be unique',
      },HttpStatus.ACCEPTED)         
    }
  }
}

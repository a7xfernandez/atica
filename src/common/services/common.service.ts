import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CommonService {
  private readonly saltRounds = 10;

  VerifyPassword(password: string, compare: string): Promise<boolean> {
    return  bcrypt.compare(password, compare);
  }

  hashPassword(password: string){
    const salt =  bcrypt.genSalt(this.saltRounds);
    return  bcrypt.hash(password, salt);
  }
}

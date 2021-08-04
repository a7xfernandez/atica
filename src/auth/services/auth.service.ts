import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from '../dto/access-token.dto';
import { AccountsService } from 'src/accounts/services/accounts.service';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { CommonService } from 'src/common/services/common.service';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountsService,
    private credentialService: AccountsCredentialsService,
    private commonService: CommonService,
    private jwtService: JwtService,
  ) {}

  async validate(
    email: string,
    password: string
  ) {
    const user = await this.accountService.findByEmail(email);
    let compare: string;
    try {
      const secret = await this.credentialService.findOne(user.id);
      compare = secret.credential;
    } catch (error) {
      compare = '';
    }
   
   const statePassword = await this.commonService.VerifyPassword(
      password,
      compare,
    );

    if (user && statePassword) {
      return user;
    }
    
    return null;
  }

  async generateToken(user): Promise<AccessToken> {
    const payload = { jwtid: uuidv4(), username: user.userName, sub: user.id };
    return new AccessToken({
      access_token: this.jwtService.sign(payload),
    });
  }

  async validateApiKey(key: string): Promise<boolean> {
    return key === process.env.API_KEY;
  }
}

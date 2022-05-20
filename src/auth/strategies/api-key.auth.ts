import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ApiKeyAuth extends PassportStrategy(HeaderAPIKeyStrategy){
    constructor(private authService: AuthService) {
        super(
            { header: 'HTTP-X-API-KEY', prefix: '' },true,
            async (apikey, done, req) => {
             return this.validate(apikey, done);
          });
    }
    public async validate(apiKey: string, done: (error: Error, data) => {}) {
        const check = await this.authService.authByApiKey(apiKey);
        if (!check) {
          return done( new UnauthorizedException(), null);          
        }
        return done(null, apiKey);
    }

}
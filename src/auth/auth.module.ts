import { CommonModule } from './../common/common.module';
import { AccountsCredentialsModule } from './../accounts-credentials/accounts-credentials.module';
import { AccountsModule } from './../accounts/accounts.module';
import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ApiKeyStrategy } from './strategies/api-key.strategy';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';

@Module({
  imports: [
    ConfigDefaultModule,
    AccountsModule,
    AccountsCredentialsModule,
    CommonModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
        audience: process.env.APP_URL,
        issuer: process.env.APP_ISS,
      },
    }),
  ],
  exports:[AuthService],
  providers: [AuthService, LocalStrategy, JwtStrategy, ApiKeyStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

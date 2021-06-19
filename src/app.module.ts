import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { AgentsModule } from './agents/agents.module';
import { PackagesModule } from './packages/packages.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { AccountTypeModule } from './account-type/account-type.module';
import { AccountCredentialModule } from './account-credential/account-credential.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountInfoKeysModule } from './account-info-keys/account-info-keys.module';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';

@Module({
  imports: [
    ConfigDefaultModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ClientsModule,
    AgentsModule,
    PackagesModule,
    UsersModule,
    AccountModule,
    AccountTypeModule,
    AccountCredentialModule,
    AccountInfoKeysModule,
  ],
  exports: [],
  controllers: [],
})
export class AppModule {}

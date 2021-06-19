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

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pgsqlapp',
        password: 'pgsqlapp1',
        database: 'backendTrackingApp',
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
    AccountInfoKeysModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

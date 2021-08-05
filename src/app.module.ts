import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { CommonModule } from './common/common.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsCredentialsModule } from './accounts-credentials/accounts-credentials.module';
import { AccountsProfilesModule } from './accounts-profiles/accounts-profiles.module';
import { AgentsModule } from './agents/agents.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { PackagesModule } from './packages/packages.module';
import { AccountsTypesModule } from './accounts-types/accounts-types.module';



@Module({
  imports: [
    ConfigDefaultModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      //url: process.env.DATABASE_URL,
      host: 'ec2-34-204-128-77.compute-1.amazonaws.com',
      port: 5432,
      username: 'oknnstjwgwkupt',
      password: '8eb87888d7480d562654afa1930bbaff8977742983bbebb1a68fd81bb7e310bb',
      database: 'd693e6gcq8ld7f',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }),
    CommonModule,
    AccountsTypesModule,
    AccountsModule,
    AccountsCredentialsModule,
    AccountsProfilesModule,
    AgentsModule,
    UsersModule,
    CustomersModule,
    PackagesModule,
    AuthModule,
  ],
  exports: [],
  controllers: [],
})
export class AppModule {}

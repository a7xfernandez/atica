import { AuthModule } from './auth/auth.module';
import { Module,  } from '@nestjs/common';
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
import { TappModule } from './tapp/tapp.module';


@Module({
  imports: [
    ConfigDefaultModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
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
    TappModule,
  ],
  exports: [],
  controllers: [],
})
export class AppModule {}

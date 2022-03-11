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
import { EmbarcationsModule } from './embarcations/embarcations.module';
import { LogisticOperatorsModule } from './logistic-operators/logistic-operators.module';
import { ShipmentAddressesModule } from './shipment-addresses/shipment-addresses.module';
import { AddressTypesModule } from './address-types/address-types.module';
import { AddressesModule } from './addresses/addresses.module';
import { CountriesModule } from './countries/countries.module';
import { ShippingTypesModule } from './shipping-types/shipping-types.module';
import { ServiceTypesModule } from './service-types/service-types.module';
import { PackageTypesModule } from './package-types/package-types.module';
import { CompaniesModule } from './companies/companies.module';


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
    EmbarcationsModule,
    LogisticOperatorsModule,
    ShipmentAddressesModule,
    AddressTypesModule,
    AddressesModule,
    CountriesModule,
    ShippingTypesModule,
    ServiceTypesModule,
    PackageTypesModule,
    CompaniesModule,    
  ],
  exports: [],
  controllers: [],
})
export class AppModule {}

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
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { TrackingsModule } from './trackings/trackings.module';
import { FincasModule } from './fincas/fincas.module';
import { ProcesosModule } from './procesos/procesos.module';
import { LotesModule } from './lotes/lotes.module';
import { PecerasModule } from './peceras/peceras.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { MedidoresModule } from './medidores/medidores.module';
import { TemperaturesModule } from './temperatures/temperatures.module';


@Module({
  imports: [
    ConfigDefaultModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:pgsqlapp1@maria.c3v5o6etixdn.us-east-2.rds.amazonaws.com:5432/maria',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    CommonModule,
    AccountsTypesModule,
    AccountsModule,
    AccountsCredentialsModule,
    AccountsProfilesModule,
    AgentsModule,
    UsersModule,
    CustomersModule,
    //PackagesModule,
    AuthModule,
    //EmbarcationsModule,
    //LogisticOperatorsModule,
    ShipmentAddressesModule,
    AddressTypesModule,
    AddressesModule,
    CountriesModule,
    //ShippingTypesModule,
    //ServiceTypesModule,
    //PackageTypesModule,
    CompaniesModule,
    //OrdersModule,
    //OrderDetailsModule,
    //TrackingsModule,
    FincasModule,
    ProcesosModule,
    LotesModule,
    PecerasModule,
    ProyectosModule,
    MedidoresModule,
    TemperaturesModule,    
  ],
  exports: [],
  controllers: [],
})
export class AppModule {}

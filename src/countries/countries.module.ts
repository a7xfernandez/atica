import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  exports: [TypeOrmModule,CountriesService],
  controllers: [CountriesController],
  providers: [CountriesService]
})
export class CountriesModule {}

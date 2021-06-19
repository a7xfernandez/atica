import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { PackageEntity } from './models/package.entity';
import { PackagesController } from './packages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PackageEntity]), ConfigDefaultModule],
  exports: [TypeOrmModule],
  controllers: [PackagesController],
})
export class PackagesModule {}

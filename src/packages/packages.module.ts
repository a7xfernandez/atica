import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { PackageEntity } from './models/package.entity';
import { PackagesController } from './packages.controller';
import { PackagesService } from './services/packages.service';

@Module({
  imports: [TypeOrmModule.forFeature([PackageEntity]), ConfigDefaultModule],
  exports: [TypeOrmModule],
  controllers: [PackagesController],
  providers: [PackagesService],
})
export class PackagesModule {}

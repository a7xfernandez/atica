import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageEntity } from './models/package.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PackageEntity])],
  exports: [TypeOrmModule],
})
export class PackagesModule {}

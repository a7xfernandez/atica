import { Module } from '@nestjs/common';
import { PackagesService } from './services/packages.service';
import { PackagesController } from './packages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Package])],
  exports: [TypeOrmModule, PackagesService],
  controllers: [PackagesController],
  providers: [PackagesService],
})
export class PackagesModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePackageDto } from '../dto/create-package.dto';
import { UpdatePackageDto } from '../dto/update-package.dto';
import { Package } from '../entities/package.entity';

@Injectable()
export class PackagesService {
  constructor(
    @InjectRepository(Package)
    private packageRepository: Repository<Package>,
  ) {}

  async create(createPackageDto: CreatePackageDto) {
    return await this.packageRepository.save(createPackageDto);
  }

  async findAll(limitSkip: number, limitTake: number) {
    return await this.packageRepository.find({
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  async findOne(id: number) {
    return await this.packageRepository.findOne(id);
  }

  async update(id: number, updatePackageDto: UpdatePackageDto) {
    return await this.packageRepository.update(id, updatePackageDto);
  }

  async remove(id: number) {
    return await this.packageRepository.softDelete(id);
  }
}

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

  create(createPackageDto: CreatePackageDto) {
    return this.packageRepository.save(createPackageDto);
  }

  findAll(limitSkip: number, limitTake: number) {
    return this.packageRepository.find({
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  findOne(id: number) {
    return this.packageRepository.findOne(id);
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return this.packageRepository.update(id, updatePackageDto);
  }

  remove(id: number) {
    return this.packageRepository.softDelete(id);
  }
}

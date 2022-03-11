import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePackageTypeDto } from './dto/create-package-type.dto';
import { UpdatePackageTypeDto } from './dto/update-package-type.dto';
import { PackageType } from './entities/package-type.entity';

@Injectable()
export class PackageTypesService {

  constructor(
    @InjectRepository(PackageType)
    private packageTypeRepository: Repository<PackageType>,
  ){}


  async create(createPackageTypeDto: CreatePackageTypeDto) {
    return await this.packageTypeRepository.save(createPackageTypeDto);
  }

  async findAll() {
    return await this.packageTypeRepository.find();
  }

  async findOne(id: number) {
    return this.packageTypeRepository.findOne(id);
  }

  async update(id: number, updatePackageTypeDto: UpdatePackageTypeDto) {
    return await this.packageTypeRepository.update(id,updatePackageTypeDto);
  }

  async remove(id: number) {
    return await this.packageTypeRepository.softDelete(id);
  }
}

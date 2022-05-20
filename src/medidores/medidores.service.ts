import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedidoreDto } from './dto/create-medidore.dto';
import { UpdateMedidoreDto } from './dto/update-medidore.dto';
import { Medidore } from './entities/medidore.entity';

@Injectable()
export class MedidoresService {

  constructor(
    @InjectRepository(Medidore)
    private medidoreRepository: Repository<Medidore>
  ){}
  
  async create(createMedidoreDto: CreateMedidoreDto) {
    return await this.medidoreRepository.save(createMedidoreDto);
  }

  async findOneByApliKey(apiKey:string){
    return await this.medidoreRepository.findOne({
      where: {apiKey:apiKey}
    })
  }
  findAll() {
    return `This action returns all medidores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medidore`;
  }

  update(id: number, updateMedidoreDto: UpdateMedidoreDto) {
    return `This action updates a #${id} medidore`;
  }

  remove(id: number) {
    return `This action removes a #${id} medidore`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePeceraDto } from './dto/create-pecera.dto';
import { UpdatePeceraDto } from './dto/update-pecera.dto';
import { Pecera } from './entities/pecera.entity';

@Injectable()
export class PecerasService {

  constructor(
    @InjectRepository(Pecera)
    private peceraRepository: Repository<Pecera>
  ){}


  async create(createPeceraDto: CreatePeceraDto) {
    return await this.peceraRepository.save(createPeceraDto);
  }

  findAll() {
    return `This action returns all peceras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pecera`;
  }

  update(id: number, updatePeceraDto: UpdatePeceraDto) {
    return `This action updates a #${id} pecera`;
  }

  remove(id: number) {
    return `This action removes a #${id} pecera`;
  }
}

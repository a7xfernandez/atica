import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { Lote } from './entities/lote.entity';

@Injectable()
export class LotesService {

  constructor(
    @InjectRepository(Lote)
    private loteRepository: Repository<Lote>
  ){}

  async create(createLoteDto: CreateLoteDto) {
    return await this.loteRepository.save(createLoteDto);
  }

  findAll() {
    return `This action returns all lotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lote`;
  }

  update(id: number, updateLoteDto: UpdateLoteDto) {
    return `This action updates a #${id} lote`;
  }

  remove(id: number) {
    return `This action removes a #${id} lote`;
  }
}

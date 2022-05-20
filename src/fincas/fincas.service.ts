import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFincaDto } from './dto/create-finca.dto';
import { UpdateFincaDto } from './dto/update-finca.dto';
import { Finca } from './entities/finca.entity';

@Injectable()
export class FincasService {

  constructor(
    @InjectRepository(Finca)
    private fincaRepository: Repository<Finca>,
  ){}


  async create(createFincaDto: CreateFincaDto) {
    return await this.fincaRepository.save(createFincaDto);
  }

  findAll() {
    return `This action returns all fincas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finca`;
  }

  update(id: number, updateFincaDto: UpdateFincaDto) {
    return `This action updates a #${id} finca`;
  }

  remove(id: number) {
    return `This action removes a #${id} finca`;
  }
}

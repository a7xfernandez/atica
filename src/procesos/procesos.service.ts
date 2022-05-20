import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProcesoDto } from './dto/create-proceso.dto';
import { UpdateProcesoDto } from './dto/update-proceso.dto';
import { Proceso } from './entities/proceso.entity';

@Injectable()
export class ProcesosService {

  constructor(
    @InjectRepository(Proceso)
    private procesoRepository: Repository<Proceso>,
  ){}

  async create(createProcesoDto: CreateProcesoDto) {
    return await this.procesoRepository.save(createProcesoDto);
  }

  findAll() {
    return `This action returns all procesos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proceso`;
  }

  update(id: number, updateProcesoDto: UpdateProcesoDto) {
    return `This action updates a #${id} proceso`;
  }

  remove(id: number) {
    return `This action removes a #${id} proceso`;
  }
}

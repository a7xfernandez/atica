import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedidoresService } from 'src/medidores/medidores.service';
import { Repository } from 'typeorm';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { Temperature } from './entities/temperature.entity';

@Injectable()
export class TemperaturesService {

  constructor(
    @InjectRepository(Temperature)
    private temperatureRepository: Repository<Temperature>,
    private medidoreService: MedidoresService
  ){}

  async create(createTemperatureDto: CreateTemperatureDto) {
    let temperature = new Temperature();
    console.log('prueba');
    let medidore = await this.medidoreService.findOneByApliKey(createTemperatureDto.apiKey);
     
    console.log(medidore);

    temperature.temperatureCelcius = createTemperatureDto.temperatureCelcius;
    temperature.medidore = medidore;

    return await this.temperatureRepository.save(temperature);
  }

  findAll() {
    return `This action returns all temperatures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} temperature`;
  }

  update(id: number, updateTemperatureDto: UpdateTemperatureDto) {
    return `This action updates a #${id} temperature`;
  }

  remove(id: number) {
    return `This action removes a #${id} temperature`;
  }
}

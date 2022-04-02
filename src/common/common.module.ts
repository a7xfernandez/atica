import { Module } from '@nestjs/common';
import { CommonService } from './services/common.service';
import { MappingRegistryService } from './services/mapping-registry.service';

@Module({
  exports: [CommonService,MappingRegistryService],
  providers: [CommonService,MappingRegistryService],
})
export class CommonModule {}

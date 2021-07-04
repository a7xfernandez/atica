import { Module } from '@nestjs/common';
import { CommonService } from './services/common.service';

@Module({
  exports: [CommonService],
  providers: [CommonService],
})
export class CommonModule {}

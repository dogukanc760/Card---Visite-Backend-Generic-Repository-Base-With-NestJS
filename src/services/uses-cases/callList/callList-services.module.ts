import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { CallListFactoryService } from './callList-factory.service';
import { CallListServices } from './callList-services.service';


@Module({
  imports: [DataServicesModule],
  providers: [CallListFactoryService, CallListServices],
  exports: [CallListFactoryService, CallListServices],
})
export class CallListServicesModule {}
import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { CardFactoryService } from './card-factory.service';
import { CardServices } from './card-services.service';



@Module({
  imports: [DataServicesModule],
  providers: [CardFactoryService, CardServices],
  exports: [CardFactoryService, CardServices],
})
export class CardServicesModule {}
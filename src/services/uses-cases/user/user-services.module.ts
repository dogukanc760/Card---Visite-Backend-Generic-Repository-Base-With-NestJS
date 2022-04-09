import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { UserFactoryService } from './user-factory.service';
import { UserServices } from './user-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UserServices],
  exports: [UserFactoryService, UserServices],
})
export class UserServicesModule {}
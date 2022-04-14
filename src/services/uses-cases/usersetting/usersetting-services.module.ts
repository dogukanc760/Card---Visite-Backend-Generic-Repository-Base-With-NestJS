import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { UserSettingFactoryService } from './usersetting-factory.service';
import { UserSettingServices } from './usersetting-services.service';


@Module({
  imports: [DataServicesModule],
  providers: [UserSettingFactoryService, UserSettingServices],
  exports: [UserSettingFactoryService, UserSettingServices],
})
export class UserSettingServicesModule {}

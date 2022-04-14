import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { UserSettingFactoryService } from './UserSetting-factory.service';
import { UserSettingServices } from './UserSetting-services.service';


@Module({
  imports: [DataServicesModule],
  providers: [UserSettingFactoryService, UserSettingServices],
  exports: [UserSettingFactoryService, UserSettingServices],
})
export class UserSettingServicesModule {}
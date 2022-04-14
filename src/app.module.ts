import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './environment/environment';

import { DataServicesModule } from './services/data-services.module';
import { UserServicesModule } from './services/uses-cases/user/user-services.module';
import {
  CallListController,
  CardController,
  QrCodeController,
  UserController,
  UserSettingController,
} from './controllers';
import { CallListServicesModule } from './services/uses-cases/callList/callList-services.module';
import { CardServicesModule } from './services/uses-cases/card/card-services.module';
import { QrCodesServicesModule } from './services/uses-cases/qrCode/qrCode-services.module';
import { UserSettingServicesModule } from './services/uses-cases/usersetting/usersetting-services.module';

@Module({
  imports: [
    DataServicesModule,
    UserServicesModule,
    CallListServicesModule,
    CardServicesModule,
    QrCodesServicesModule,
    //UserSettingServicesModule,
    //MongooseModule.forRoot(environment.mongoUrl),
    CacheModule.register(),
  ],
  controllers: [
    AppController,
    UserController,
    CallListController,
    CardController,
    QrCodeController,
    //UserSettingController,
  ],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {}
}

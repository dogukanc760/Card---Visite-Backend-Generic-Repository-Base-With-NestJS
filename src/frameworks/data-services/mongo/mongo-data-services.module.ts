import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from 'src/environment/environment';
import { IDataService } from '../../../core';

import {
  CallList,
  CallListSchema,
  Card,
  CardSchema,
  QrCode,
  QrCodeSchema,
  User,
  UserSchema,
  UserSetting,
  UserSettingSchema,
} from './model';
import { MongoDataServices } from './mongo-data-services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Card.name, schema: CardSchema },
      { name: CallList.name, schema: CallListSchema },
      { name: QrCode.name, schema: QrCodeSchema },
      { name: UserSetting.name, schema: UserSettingSchema },
    ]),
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  providers: [
    {
      provide: IDataService,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataService],
})
export class MongoDataServicesModule {}

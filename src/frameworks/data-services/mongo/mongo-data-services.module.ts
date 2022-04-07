import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environment from 'src/environment/environment';
import { IDataService } from '../../../core';

import {
  User,
  UserSchema,
  
} from './model';
import { MongoDataServices } from './mongo-data-services';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name:User.name, schema:UserSchema},
      
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
import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './environment/environment';

import { DataServicesModule } from '../src/services/data-services.module';

@Module({
  imports: [
    DataServicesModule,
    //MongooseModule.forRoot(environment.mongoUrl),
    CacheModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
  
  }
}

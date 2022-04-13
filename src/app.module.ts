import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './environment/environment';

import { DataServicesModule } from './services/data-services.module';
import { UserServicesModule } from './services/uses-cases/user/user-services.module';
import { CallListController, UserController } from './controllers';
import { CallListServicesModule } from './services/uses-cases/callList/callList-services.module';

@Module({
  imports: [
    DataServicesModule,
    UserServicesModule,
    CallListServicesModule,
    //MongooseModule.forRoot(environment.mongoUrl),
    CacheModule.register(),
  ],
  controllers: [AppController, UserController, CallListController],
  providers: [AppService],
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
  
  }
}

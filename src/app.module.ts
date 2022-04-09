import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import environment from './environment/environment';

import { DataServicesModule } from './services/data-services.module';
import { UserServicesModule } from './services/uses-cases/user/user-services.module';
import { UserController } from './controllers';

@Module({
  imports: [
    DataServicesModule,
    UserServicesModule,
    //MongooseModule.forRoot(environment.mongoUrl),
    CacheModule.register(),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
  
  }
}

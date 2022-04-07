import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AllExceptionFilter } from './libs/all-exception.filters';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {httpAdapter} = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  // this for global url, for example : localhost:3000/api/
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
  .setTitle('Card-Visite Backend Rest API')
  .setDescription('For Mobile and Web Project')
  .setVersion('1.0')
  .addTag('Api v1 Endpoints')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';
import { OPENAPI } from './../config/openapi.properties.setting';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix(`${process.env.PREFIX}/${process.env.VERSION}`);

  const config = new DocumentBuilder()
    .setTitle(OPENAPI.title)
    .setDescription(OPENAPI.description)
    .setVersion(OPENAPI.version)
    .build();
   const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

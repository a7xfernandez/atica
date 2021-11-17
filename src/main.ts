import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';
import express from 'express';
import { OPENAPI } from './../config/openapi.properties.setting';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(`${process.env.PREFIX}/${process.env.VERSION}`);

  const config = new DocumentBuilder()
    .addApiKey({
      type: 'apiKey',
      name: 'HTTP-X-API-KEY',
      in: 'header',
      description: 'Llave de servicio',
    })
    .setTitle(OPENAPI.title)
    .setDescription(OPENAPI.description)
    .setVersion(OPENAPI.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    //ignoreGlobalPrefix: true,
  });

  SwaggerModule.setup('api', app, document);

  server.get('/', (req: any, res: any) => {
    res.redirect('/api');
  });
  app.use(server);

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

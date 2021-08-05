import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';
import { OPENAPI } from './../config/openapi.properties.setting';
import { AppModule } from './app.module';

async function bootstrap() {
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
   const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

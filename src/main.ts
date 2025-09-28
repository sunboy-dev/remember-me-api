import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
    .setTitle("Remember Me API Documentation")
    .setDescription("API documentation for the Remember Me application")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup("swagger", app, document);

  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

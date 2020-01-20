import { NestFactory, NestApplication } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.useStaticAssets('uploads',{  //静态文件托管
    prefix:'/uploads'
  });
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('购物街')
    .setDescription('供后台管理界面调用的服务端API')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log(`http://localhost:3000/api-docs`);
}
bootstrap();

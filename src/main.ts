import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//delete not exite properte on request
    forbidNonWhitelisted: true,//Error(delete not exite properte on request)
    transform: true, //true instansof DTO
    transformOptions: {
      enableImplicitConversion: true//automatic convert type insted @type for dto
    }
  }));
  await app.listen(3000, ()=>{
    console.log("Start in port http://localhost:3000")
  });
}
bootstrap();

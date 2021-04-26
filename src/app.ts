import { NestFactory } from '@nestjs/core';
import { AppModule } from './Modules/app.module';
import { LoggerService } from './app-logger';

async function bootstrap() {
  try {
    console.clear()
    const app = await NestFactory.create(AppModule, {
      logger: new LoggerService(),
    })
    console.log('App started')
    app.enableCors()
    await app.listen(8888)
  } catch (error) {
    throw error
  }
}
bootstrap();
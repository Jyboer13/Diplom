import { NestFactory } from '@nestjs/core';
import { AppModule } from './Modules/app.module';
import { LoggerService } from './app-logger';

async function bootstrap() {
  try {
    console.clear()
    const app = await NestFactory.create(AppModule, {
      logger: new LoggerService(),
    })
    // const txService: TransactionService = app.get(TransactionService)
    // await txService.txListen()
    console.log('App started')
    await app.listen(8888)
  } catch (error) {
    throw error
  }
}
bootstrap();
import { Module } from '@nestjs/common';
import { AppController } from '../Controllers/';
import { AppService } from '../Services/';

import { RegisterModule } from "./candidate.module"
import { DbModule } from '../DB/Modules';

@Module({
  imports: [ 
    DbModule,
    RegisterModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ]
})

export class AppModule {}
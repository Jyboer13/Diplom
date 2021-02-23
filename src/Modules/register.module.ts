import { Module } from '@nestjs/common';

import { RegisterController } from '../Controllers/';
import { RegisterService } from '../Services/';
import { InvestorDBModule } from '../DB/Modules/investor.dbmodule';


@Module({
  controllers: [ RegisterController ],
  providers: [ RegisterService ],
  imports: [ InvestorDBModule ]
})

export class RegisterModule {}
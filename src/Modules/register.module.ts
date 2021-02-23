import { Module } from '@nestjs/common';

import { RegisterController } from '../Controllers/';
import { RegisterService } from '../Services/';
import { CandidateDBModule } from '../DB/Modules/candidate.dbmodule';


@Module({
  controllers: [ RegisterController ],
  providers: [ RegisterService ],
  imports: [ CandidateDBModule ]
})

export class RegisterModule {}
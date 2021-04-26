import { Module } from '@nestjs/common';

import { CandidateController } from '../Controllers';
import { CandidateService } from '../Services';
import { CandidateDBModule } from '../DB/Modules/candidate.dbmodule';


@Module({
  controllers: [ CandidateController ],
  providers: [ CandidateService ],
  imports: [ CandidateDBModule ]
})

export class RegisterModule {}
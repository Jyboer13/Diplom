import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { candidate as candidateDBModel } from '../TableModels';
import { CandidateDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([candidateDBModel])],
  providers: [CandidateDBService],
  exports: [CandidateDBService]
})
export class CandidateDBModule { }

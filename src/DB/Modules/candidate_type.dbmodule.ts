import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { candidate_type as candidateTypeDBModel } from '../TableModels';
import { CandidateTypeDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([candidateTypeDBModel])],
  providers: [CandidateTypeDBService],
  exports: [CandidateTypeDBService]
})
export class CandidateTypeDBModule { }
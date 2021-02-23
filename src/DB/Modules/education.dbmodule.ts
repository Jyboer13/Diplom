import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { education as educationDBModel } from '../TableModels';
import { EducationDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([educationDBModel])],
  providers: [EducationDBService],
  exports: [EducationDBService]
})
export class EducationDBModule { }
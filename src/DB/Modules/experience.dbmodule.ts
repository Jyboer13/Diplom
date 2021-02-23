import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { experience as experienceDBModel } from '../TableModels';
import { ExperienceDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([experienceDBModel])],
  providers: [ExperienceDBService],
  exports: [ExperienceDBService]
})
export class ExperienceDBModule { }
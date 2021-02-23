import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { vacancy as vacancyDBModel } from '../TableModels';
import { VacancyDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([vacancyDBModel])],
  providers: [VacancyDBService],
  exports: [VacancyDBService]
})
export class VacancyDBModule {}
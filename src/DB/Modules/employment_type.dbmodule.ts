import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { employment_type as employmentTypeDBModel } from '../TableModels';
import { EmploymentTypeDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([employmentTypeDBModel])],
  providers: [EmploymentTypeDBService],
  exports: [EmploymentTypeDBService]
})
export class EmploymentTypeDBModule { }
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { manager as managerDBModel } from '../TableModels';
import { ManagerDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([managerDBModel])],
  providers: [ManagerDBService],
  exports: [ManagerDBService]
})
export class ManagerDBModule {}
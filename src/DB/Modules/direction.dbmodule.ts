import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { direction as directionDBModel } from '../TableModels';
import { DirectionDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([directionDBModel])],
  providers: [DirectionDBService],
  exports: [DirectionDBService]
})
export class DirectionDBModule { }
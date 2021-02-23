import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { status as statusDBModel } from '../TableModels';
import { StatusDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([statusDBModel])],
  providers: [StatusDBService],
  exports: [StatusDBService]
})
export class StatusDBModule {}
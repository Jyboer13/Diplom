import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { skill as skillDBModel } from '../TableModels';
import { SkillDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([skillDBModel])],
  providers: [SkillDBService],
  exports: [SkillDBService]
})
export class SkillDBModule {}
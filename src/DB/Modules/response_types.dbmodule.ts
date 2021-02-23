import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { response_types as responseTypesDBModel } from '../TableModels';
import { ResponseTypesDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([responseTypesDBModel])],
  providers: [ResponseTypesDBService],
  exports: [ResponseTypesDBService]
})
export class ResponseTypesDBModule {}
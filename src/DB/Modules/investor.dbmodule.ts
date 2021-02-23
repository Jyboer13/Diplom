import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { user as investorDBModel } from '../TableModels';
import { UserDBService } from '../Services'

@Module({
  imports: [ SequelizeModule.forFeature([ investorDBModel ]) ],
  providers: [ UserDBService ],
  exports: [ UserDBService ]
})
export class InvestorDBModule {}
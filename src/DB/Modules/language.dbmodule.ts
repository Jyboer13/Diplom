import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { language as languageDBModel } from '../TableModels';
import { LanguageDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([languageDBModel])],
  providers: [LanguageDBService],
  exports: [LanguageDBService]
})
export class LanguageDBModule { }
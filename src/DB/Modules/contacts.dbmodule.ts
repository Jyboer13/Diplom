import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { contacts as contactsDBModel } from '../TableModels';
import { ContactsDBService } from '../Services'

@Module({
  imports: [SequelizeModule.forFeature([contactsDBModel])],
  providers: [ContactsDBService],
  exports: [ContactsDBService]
})
export class ContactsDBModule { }
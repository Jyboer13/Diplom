import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { user } from '../TableModels';
import { InvestorDBModule } from './investor.dbmodule';

require('dotenv').config();

const options: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.clientName,
  password: process.env.password,
  database: process.env.dbName,
  models: [ user ],
  define: { timestamps: false },
  logging: false
}

@Module({
  imports: [
    SequelizeModule.forRoot(options),
    InvestorDBModule,
  ],
})

export class DbModule {}
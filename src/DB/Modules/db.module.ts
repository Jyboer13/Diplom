import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { 
  candidate, 
  candidate_type, 
  contacts,
  direction,
  education,
  employment_type,
  experience,
  language,
  manager,
  response_types,
  skill,
  status,
  vacancy
} from '../TableModels';
import { CandidateDBModule } from './candidate.dbmodule';
import { CandidateTypeDBModule } from './candidate_type.dbmodule';
import { ContactsDBModule } from './contacts.dbmodule';
import { DirectionDBModule } from './direction.dbmodule';
import { EducationDBModule } from './education.dbmodule';
import { EmploymentTypeDBModule } from './employment_type.dbmodule';
import { ExperienceDBModule } from './experience.dbmodule';
import { LanguageDBModule } from './language.dbmodule';
import { ManagerDBModule } from './manager.dbmodule';
import { ResponseTypesDBModule } from './response_types.dbmodule';
import { SkillDBModule } from './skill.dbmodule';
import { StatusDBModule } from './status.dbmodule';
import { VacancyDBModule } from './vacancy.dbmodule';

require('dotenv').config();

const options: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.clientName,
  password: process.env.password,
  database: process.env.dbName,
  models: [  
    candidate, 
    candidate_type, 
    contacts,
    direction,
    education,
    employment_type,
    experience,
    language,
    manager,
    response_types,
    skill,
    status,
    vacancy
   ],
  define: { timestamps: false },
  logging: false
}

@Module({
  imports: [
    SequelizeModule.forRoot(options),
    CandidateDBModule,
    CandidateTypeDBModule, 
    ContactsDBModule, 
    DirectionDBModule, 
    EducationDBModule,
    EmploymentTypeDBModule,
    ExperienceDBModule,
    LanguageDBModule,
    ManagerDBModule,
    ResponseTypesDBModule,
    SkillDBModule,
    StatusDBModule,
    VacancyDBModule
  ],
})
export class DbModule {}
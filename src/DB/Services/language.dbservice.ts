import { language as languageDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class LanguageDBService {
  constructor(
    @InjectModel(languageDBModel)
    private readonly candidateModel: typeof languageDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<languageDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<languageDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<languageDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | languageDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}

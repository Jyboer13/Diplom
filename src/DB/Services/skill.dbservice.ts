import { skill as skillDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class SkillDBService {
  constructor(
    @InjectModel(skillDBModel)
    private readonly candidateModel: typeof skillDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<skillDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<skillDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<skillDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | skillDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}

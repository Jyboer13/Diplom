import { vacancy as vacancyDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class VacancyDBService {
  constructor(
    @InjectModel(vacancyDBModel)
    private readonly candidateModel: typeof vacancyDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<vacancyDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<vacancyDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<vacancyDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | vacancyDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}

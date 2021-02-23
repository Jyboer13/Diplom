import { response_types as responseTypesDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class ResponseTypesDBService {
  constructor(
    @InjectModel(responseTypesDBModel)
    private readonly candidateModel: typeof responseTypesDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<responseTypesDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<responseTypesDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<responseTypesDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | responseTypesDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}

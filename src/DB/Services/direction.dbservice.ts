import { direction as directionDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class DirectionDBService {
  constructor(
    @InjectModel(directionDBModel)
    private readonly candidateModel: typeof directionDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<directionDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<directionDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<directionDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | directionDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}

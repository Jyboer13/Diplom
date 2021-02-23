import { status as statusDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class StatusDBService {
  constructor(
    @InjectModel(statusDBModel)
    private readonly candidateModel: typeof statusDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<statusDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<statusDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<statusDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | statusDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}

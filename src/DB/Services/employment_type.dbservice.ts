import { employment_type as employmentTypeDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class EmploymentTypeDBService {
  constructor(
    @InjectModel(employmentTypeDBModel)
    private readonly candidateModel: typeof employmentTypeDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<employmentTypeDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<employmentTypeDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<employmentTypeDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | employmentTypeDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}

import { user as investorDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class UserDBService {
  constructor(
    @InjectModel(investorDBModel)
    private readonly investorModel: typeof investorDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<investorDBModel[]> {
    return this.investorModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<investorDBModel> {
    return this.investorModel.findOne( { where } );
  }

  public async create(data: any): Promise<investorDBModel>{
    return this.investorModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | investorDBModel[]>>{
    return this.investorModel.update(data, { where })
  }
}

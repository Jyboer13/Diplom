import { Injectable, Inject } from '@nestjs/common';
import { UserDBService } from '../DB/Services';
import { user as investorDBModel } from '../DB/TableModels';

@Injectable()
export class RegisterService {
  private readonly investorDBService: UserDBService;

  public constructor(@Inject(UserDBService) investorDBService: UserDBService){
    this.investorDBService = investorDBService
  }

  public async registerPrimary(email: string, password: string) :Promise<Object>{
    const registerResult: investorDBModel = await this.investorDBService.create({
      id: "ID.getRandomUUID()",
      email,
      password,
      balance: 0,
      status: "register_primary"
    })
    
    return {
      code: 200,
      id: registerResult.id,
      status: registerResult,
      message: 'Success!',
    } 
  }

  public async registerSecondary(id: string, isRefer?: Boolean, referParentId?: string) :Promise<Object>{


    await this.investorDBService.update({ id }, {
      status: "register_secondary"
    })

    return {
      code: 200,
      id,
      status: 'register_secondary',
      message: 'Success!',
    }
  }

  public async registerVerified(id: string) :Promise<Object>{

    await this.investorDBService.update({ id }, { status: "verified" })

    return {
      code: 200,
      id,
      status: 'verified',
      message: 'Success!',
    }
  }
}
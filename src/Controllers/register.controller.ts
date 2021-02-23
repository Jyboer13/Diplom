import { Controller, Inject, Body, Post } from "@nestjs/common";
import { RegisterService } from '../Services/';

@Controller('/register')
export class RegisterController {
  private readonly registerService: RegisterService;

  public constructor(@Inject(RegisterService) registerService: RegisterService) {
    this.registerService = registerService
  }

  @Post('/primary')
  public async registerPrimary(@Body() body: any): Promise<Object> {
    const email: string = body.email
    const password: string = body.password
    return this.registerService.registerPrimary(email, password);
  }

  @Post('/secondary')
  public async registerSecondary(@Body() body: any): Promise<Object> {
    const id: string = body.id
    const isRefer: Boolean = body.isRefer
    const referParentId: string = body.referParentId

    return this.registerService.registerSecondary(id, isRefer, referParentId);
  }

  @Post('/verify')
  public async registerVerified(@Body() body: any): Promise<Object> {
    const id: string = body.id
    return this.registerService.registerVerified(id);
  }
}

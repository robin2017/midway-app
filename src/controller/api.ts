import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';
import { PersonService } from '../service/person';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  personService: PersonService;

  @Get('/get_user')
  async getUser(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/get_person')
  async getPerson(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.personService.getPerson({ uid });
    return { success: true, message: 'OK', data: user };
  }
}

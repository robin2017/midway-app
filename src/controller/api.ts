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

  @Get('/add_person')
  async addPerson(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.personService.addPerson({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/update_person')
  async updatePerson(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.personService.updatePerson({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/delete_person')
  async deletePerson(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.personService.deletePerson({ uid });
    return { success: true, message: 'OK', data: user };
  }

}

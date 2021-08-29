import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { Person } from '../entity/person';
import { InjectEntityModel } from '@midwayjs/orm';

import { Repository } from 'typeorm';
@Provide()
export class PersonService {
  
  @InjectEntityModel(Person)
  personModel: Repository<Person>;

  async getPerson(options: IUserOptions) {
    let allPersons = await this.personModel.find();
    console.log("All photos from the db: ", allPersons);
    return {
      uid: options.uid,
      data:allPersons
    };
  }
}

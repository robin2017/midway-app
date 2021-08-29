import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { Person } from '../entity/person';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
@Provide()
export class PersonService {
  // 注入数据库表的实例
  @InjectEntityModel(Person)
  personModel: Repository<Person>;
  // 1、查询
  async getPerson(options: IUserOptions) {
    let allPersons = await this.personModel.find();
    return {
      uid: options.uid,
      data: allPersons,
    };
  }
  // 2、增加
  async addPerson(options: IUserOptions) {
    let person = new Person();
    person.name = 'Peter' + Math.random().toString(16).slice(5);
    person.age = 23;
    const personResult = await this.personModel.save(person);
    return {
      uid: options.uid,
      data: personResult,
    };
  }
  // 3、更新
  async updatePerson(options: IUserOptions) {
    let person = await this.personModel.findOne({name:'peter'});
    person.age += 1;
    const personResult = await this.personModel.save(person);
    return {
      uid: options.uid,
      data: personResult,
    };
  }
  //4、删除
  async deletePerson(options: IUserOptions) {
    let person = await this.personModel.findOne({name:'peter'});
    const personResult = await this.personModel.remove(person);
    return {
      uid: options.uid,
      data: personResult,
    };
  }
}

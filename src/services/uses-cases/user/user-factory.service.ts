import { Injectable } from '@nestjs/common';
import { User } from '../../../core/entities';
import { CreateUserDto, UpdateUser } from '../../../core/dtos';
// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
// import environment from 'src/environment/environment';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.fullName = createUserDto.fullName;
    newUser.companyName = createUserDto.companyName;
    newUser.gsm = createUserDto.gsm;
    newUser.gsm1 = createUserDto.gsm1;
    newUser.gsm2 = createUserDto.gsm2;
    newUser.mail = createUserDto.mail;
    newUser.password = createUserDto.password;
    //await bcrypt.hash(
    //   createUserDto.password,
    //   environment.hashText,
    // );
    newUser.city = createUserDto.city;
    newUser.distinct = createUserDto.distinct;


    return newUser;
  }

  updateUser(updateUserDto: UpdateUser) {
    const newUser = new User();
    newUser.fullName = updateUserDto.fullName;
    newUser.companyName = updateUserDto.companyName;
    newUser.gsm = updateUserDto.gsm;
    newUser.gsm1 = updateUserDto.gsm1;
    newUser.gsm2 = updateUserDto.gsm2;
    newUser.mail = updateUserDto.mail;
    if (updateUserDto.password) {
      newUser.password = updateUserDto.password;
      // await bcrypt.hash(
      //   updateUserDto.password,
      //   environment.hashText,
      // );
    }
    newUser.city = updateUserDto.city;
    newUser.distinct = updateUserDto.distinct;
    return newUser;
  }
}

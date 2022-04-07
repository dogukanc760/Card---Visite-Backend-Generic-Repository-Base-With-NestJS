import { Injectable } from '@nestjs/common';
import { User } from '../../../core/entities';
import { CreateUserDto, UpdateUser } from '../../../core/dtos';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import environment from 'src/environment/environment';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthorFactoryService {
  //   createNewAuthor(createAuthorDto: CreateUserDto) {
  //     const newAuthor = new Author();
  //     newAuthor.firstName = createAuthorDto.firstName;
  //     newAuthor.lastName = createAuthorDto.lastName;

  //     return newAuthor;
  //   }
  public finalPass: string;
  async createEncryptedPass(password: string) {
    const iv = randomBytes(16);
    const key = (await promisify(scrypt)(
      password,
      environment.hashText,
      32,
    )) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const textToEncrypt = 'Nest';
    const encryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);
    this.finalPass = encryptedText.toString();
    //return this.finalPass;
    return encryptedText.toString();
  }
  async createNewUser(createUserDto: CreateUserDto) {
    const newUser = await new User();
    newUser.fullName = createUserDto.fullName;
    newUser.companyName = createUserDto.companyName;
    newUser.gsm = createUserDto.gsm;
    newUser.gsm1 = createUserDto.gsm1;
    newUser.gsm2 = createUserDto.gsm2;
    newUser.mail = createUserDto.mail;
    newUser.password = await bcrypt.hash(
      createUserDto.password,
      environment.hashText,
    );
    newUser.city = createUserDto.city;
    newUser.distinct = createUserDto.distinct;
  }

  async updateAuthor(updateUserDto: UpdateUser) {
    const newUser = await new User();
    newUser.fullName = updateUserDto.fullName;
    newUser.companyName = updateUserDto.companyName;
    newUser.gsm = updateUserDto.gsm;
    newUser.gsm1 = updateUserDto.gsm1;
    newUser.gsm2 = updateUserDto.gsm2;
    newUser.mail = updateUserDto.mail;
    if (updateUserDto.password) {
      newUser.password = await bcrypt.hash(
        updateUserDto.password,
        environment.hashText,
      );
    }
    newUser.city = updateUserDto.city;
    newUser.distinct = updateUserDto.distinct;
  }
}

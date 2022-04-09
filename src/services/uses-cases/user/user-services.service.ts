import { Injectable } from '@nestjs/common';
import { User } from '../../../core/entities';
import { IDataService } from '../../../core/abstracts';
import { CreateUserDto, UpdateUser } from '../../../core/dtos';

import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserServices {
  constructor(
    private dataServices: IDataService,
    private userFactoryService: UserFactoryService,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.dataServices.users.getAll();
  }

  getUserById(id: any): Promise<User> {
    return this.dataServices.users.get(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    return await this.dataServices.users.create(user);
  }

  updateUser(
    userId: string,
    updateUserDto: UpdateUser,
  ): Promise<User> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }
}
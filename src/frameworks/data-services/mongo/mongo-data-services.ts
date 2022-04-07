import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataService } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { User, UserDocument } from './model';

@Injectable()
export class MongoDataServices implements IDataService, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
  ) {}

  onApplicationBootstrap() {
   
    this.users = new MongoGenericRepository<User>(this.UserRepository);
   
  }
}

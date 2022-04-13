import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataService, IGenericRepository } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  CallList,
  CallListDocument,
  Card,
  CardDocument,
  QrCode,
  QrCodeDocument,
  User,
  UserDocument,
  UserSetting,
  UserSettingDocument,
} from './model';

@Injectable()
export class MongoDataServices implements IDataService, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;
  cards: MongoGenericRepository<Card>;
  callLists: MongoGenericRepository<CallList>;
  qrCodes: MongoGenericRepository<QrCode>;
  userSettings: MongoGenericRepository<UserSetting>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Card.name)
    private CardRepository: Model<CardDocument>,
    @InjectModel(CallList.name)
    private CallListRepository: Model<CallListDocument>,
    @InjectModel(QrCode.name)
    private QrCodeRepository: Model<QrCodeDocument>,
    @InjectModel(UserSetting.name)
    private UserSettingRepository: Model<UserSettingDocument>,
  ) {}
  calls: IGenericRepository<CallList>;

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.cards = new MongoGenericRepository<Card>(this.CardRepository);
    this.callLists = new MongoGenericRepository<CallList>(
      this.CallListRepository,
    );
    this.qrCodes = new MongoGenericRepository<QrCode>(this.QrCodeRepository);
    this.userSettings = new MongoGenericRepository<UserSetting>(
      this.UserSettingRepository,
    );
  }
}

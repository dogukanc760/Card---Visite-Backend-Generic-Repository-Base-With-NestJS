import { Injectable } from '@nestjs/common';
import { CreateUserSettingDto, UpdateUserSettingDto } from '../../../core/dtos';
import { UserSetting } from '../../../core/entities';

// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
// import environment from 'src/environment/environment';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UserSettingFactoryService {
  createNewUserSetting(createUserSettingDto: CreateUserSettingDto) {
    const newUserSetting = new UserSetting();
    newUserSetting.facebook = createUserSettingDto.facebook; 
    newUserSetting.instagram = createUserSettingDto.instagram;
    newUserSetting.linkedIn = createUserSettingDto.linkedIn;
    newUserSetting.telegram = createUserSettingDto.telegram;
    newUserSetting.userId = createUserSettingDto.userId;
    newUserSetting.youtube = createUserSettingDto.youtube;


    return newUserSetting;
  }

  updateUserSetting(updateUserSettingDto: UpdateUserSettingDto) {
    const newUserSetting = new UserSetting();
    newUserSetting.facebook = updateUserSettingDto.facebook; 
    newUserSetting.instagram = updateUserSettingDto.instagram;
    newUserSetting.linkedIn = updateUserSettingDto.linkedIn;
    newUserSetting.telegram = updateUserSettingDto.telegram;
    newUserSetting.userId = updateUserSettingDto.userId;
    newUserSetting.youtube = updateUserSettingDto.youtube;
    return newUserSetting;
  }
}

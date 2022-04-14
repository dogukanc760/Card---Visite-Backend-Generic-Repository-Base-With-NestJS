import { Injectable } from '@nestjs/common';
import { UserSetting } from '../../../core/entities';
import { IDataService } from '../../../core/abstracts';
import { UserSettingFactoryService } from './UserSetting-factory.service';
import { CreateUserSettingDto, UpdateUserSettingDto } from 'src/core/dtos';

@Injectable()
export class UserSettingServices {
  constructor(
    private dataServices: IDataService,
    private UserSettingFactoryService: UserSettingFactoryService,
  ) {}

  getAllUserSetting(): Promise<UserSetting[]> {
    return this.dataServices.userSettings.getAll();
  }

  async getUserSettingByUser(id: any): Promise<UserSetting[]> {
    const userSettings = (await this.dataServices.userSettings.getAll()).filter(
      (x) => x.userId == id
    );
    return userSettings;
  }

  getUserSettingById(id: any): Promise<UserSetting> {
    return this.dataServices.userSettings.get(id);
  }

  createCall(createUserSettingDto: CreateUserSettingDto): Promise<UserSetting> {
    try {
      const userSettings =
        this.UserSettingFactoryService.createNewUserSetting(createUserSettingDto);
      return this.dataServices.userSettings.create(userSettings);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  updateCall(
    callId: string,
    updateCallDto: UpdateUserSettingDto,
  ): Promise<UserSetting> {
    const userSettings = this.UserSettingFactoryService.updateUserSetting(updateCallDto);
    return this.dataServices.userSettings.update(callId, userSettings);
  }
}

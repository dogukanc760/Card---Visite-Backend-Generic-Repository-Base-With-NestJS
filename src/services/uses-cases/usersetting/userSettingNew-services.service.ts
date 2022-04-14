import { Injectable } from "@nestjs/common";
import { UserSetting } from "../../../core/entities";
import {IDataService} from '../../../core/abstracts'
import {CreateUserSettingDto, UpdateUserSettingDto} from '../../../core/dtos/usersetting.dto';

import { UserSettingFactoryService } from "./UserSetting-factory.service";

@Injectable()
export class UserSettingService{
    /**
     *
     */
    constructor(
        private dataServices: IDataService,
        private userSettingFactoryService:UserSettingFactoryService
    ) {}
    
    getAllUserSetting(): Promise<UserSetting[]> {
        return this.dataServices.userSettings.getAll();
    }
    

}
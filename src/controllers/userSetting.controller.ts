/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';
import {
  ApiBadGatewayResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import environment from 'src/environment/environment';
import { UserSetting } from 'src/frameworks/data-services/mongo/model';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';


import { CreateUserSettingDto, UpdateUserSettingDto } from '../core/dtos';
import { UserSettingServices } from 'src/services';

@Controller('/user-settings')
@ApiTags('UserSetting Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserSettingController {
  constructor(private userSettingServices: UserSettingServices ) {}

  @Get()
  async getAll() {
    return this.userSettingServices.getAllUserSetting();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.userSettingServices.getUserSettingById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateUserSettingDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  createUserSetting(@Body() UserSettingDto: CreateUserSettingDto) {
    return this.userSettingServices.createCall(UserSettingDto);
  }

  @Put(':id')
  updateUserSetting(
    @Param('id') UserSettingId: string,
    @Body() updateUserSettingDto: UpdateUserSettingDto,
  ) {
    return this.userSettingServices.updateCall(
      UserSettingId,
      updateUserSettingDto,
    );
  }
}

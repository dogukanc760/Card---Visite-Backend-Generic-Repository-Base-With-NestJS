import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';
import {
  ApiBadGatewayResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import environment from 'src/environment/environment';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { CreateUserDto, UpdateUser } from '../core/dtos';
import { UserServices } from '../services/uses-cases/user/user-services.service';

@Controller('/user')
@UseInterceptors(TransformInterceptor)
export class UserController {
  constructor(private UserServices: UserServices) {}

  @Get()
  async getAll() {
    return this.UserServices.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.UserServices.getUserById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateUserDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  createUser(@Body() UserDto: CreateUserDto) {
    return this.UserServices.createUser(UserDto);
  }

  @Put(':id')
  updateUser(@Param('id') UserId: string, @Body() updateUserDto: UpdateUser) {
    return this.UserServices.updateUser(UserId, updateUserDto);
  }
}

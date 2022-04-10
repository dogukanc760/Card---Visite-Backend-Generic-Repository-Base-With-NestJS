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
} from '@nestjs/swagger';
import environment from 'src/environment/environment';
import { User } from 'src/frameworks/data-services/mongo/model';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { CreateUserDto, LoginUserDto, UpdateUser } from '../core/dtos';
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

  // @ApiOkResponse({
  //   description: environment.api_results.success,
  //   type: LoginUserDto,
  //   isArray: true,
  //   status: 200,
  // })
  // @ApiForbiddenResponse({ description: 'Forbidden' })
  // @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  @Post('auth')
  async auth(@Body() LoginDto: LoginUserDto) {
    const user = (await this.UserServices.getAllUsers()).filter(
      (x) => x.mail == LoginDto.mail,
    );
    //const results = await Promise.all(user);

    if (user.length > 0) {
      return user;
    }

    return null;
  }

  @Put(':id')
  updateUser(@Param('id') UserId: string, @Body() updateUserDto: UpdateUser) {
    return this.UserServices.updateUser(UserId, updateUserDto);
  }
}

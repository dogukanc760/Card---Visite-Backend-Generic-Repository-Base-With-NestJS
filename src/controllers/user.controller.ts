import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUser } from '../core/dtos';
import { UserServices } from '../services/uses-cases/user/user-services.service';

@Controller('api/user')
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
  createUser(@Body() UserDto: CreateUserDto) {
    return this.UserServices.createUser(UserDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') UserId: string,
    @Body() updateUserDto: UpdateUser,
  ) {
    return this.UserServices.updateUser(UserId, updateUserDto);
  }
}
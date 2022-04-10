import {
  IsString,
  IsNotEmpty,
  IsDate,
  MaxLength,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(35)
  @MinLength(5)
  fullName: string;

  @IsString()
  @MaxLength(35)
  @MinLength(5)
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(13)
  @MinLength(8)
  gsm: string;

  @IsString()
  //@IsNotEmpty()
  @MaxLength(13)
  @MinLength(8)
  gsm1: string;

  @IsString()
  //@IsNotEmpty()
  @MaxLength(13)
  @MinLength(8)
  gsm2: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(8)
  mail: string;

  @IsString()
  @IsNotEmpty()
  // @MaxLength(30)
  // @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(4)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(4)
  distinct: string;

  @IsBoolean()
  @IsNotEmpty()
  isBan: boolean;

  @IsString()
  @IsNotEmpty()
  banTime: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}


export class LoginUserDto extends PartialType(CreateUserDto){}

export class UpdateUser extends PartialType(CreateUserDto){}
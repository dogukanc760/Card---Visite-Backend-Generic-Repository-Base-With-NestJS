import {
  IsString,
  IsNotEmpty,
  IsDate,
  MaxLength,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserSettingDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString()
  @IsNotEmpty()
  linkedIn: string;
  @IsString()
  @IsNotEmpty()
  facebook: string;
  @IsString()
  @IsNotEmpty()
  instagram: string;
  @IsString()
  @IsNotEmpty()
  youtube: string;
  @IsString()
  @IsNotEmpty()
  telegram: string;
}

export class UpdateUserSettingDto extends PartialType(CreateUserSettingDto){}
export class DeleteUserSettingDto extends PartialType(CreateUserSettingDto){}
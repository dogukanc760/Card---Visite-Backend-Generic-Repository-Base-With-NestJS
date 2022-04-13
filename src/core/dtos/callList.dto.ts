import {
  IsString,
  IsNotEmpty,
  IsDate,
  MaxLength,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCallListDto {
  @IsString()
  @IsNotEmpty()
  fromUserId: string;
  @IsString()
  @IsNotEmpty()
  fromUserName: string;
  @IsString()
  @IsNotEmpty()
  fromCompanyName: string;
  @IsString()
  @IsNotEmpty()
  fromUserGsm: string;
  @IsString()
  @IsNotEmpty()
  toUserId: string;
  @IsString()
  @IsNotEmpty()
  toUserName: string;
  @IsString()
  @IsNotEmpty()
  toCompanyName: string;
  @IsString()
  @IsNotEmpty()
  toUserGsm: string;
  @IsString()
  @IsNotEmpty()
  whyContent: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

export class UpdateCallListDto extends PartialType(CreateCallListDto){}
export class DeleteCallListDto extends PartialType(CreateCallListDto){}
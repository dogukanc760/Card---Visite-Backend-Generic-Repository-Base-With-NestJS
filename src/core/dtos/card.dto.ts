import {
  IsString,
  IsNotEmpty,
  IsDate,
  MaxLength,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString()
  @IsNotEmpty()
  companyLogo: string;
  @IsString()
  @IsNotEmpty()
  logoColor: string;
  @IsString()
  @IsNotEmpty()
  companyName: string;
  @IsString()
  @IsNotEmpty()
  imgUrl: string;
  @IsString()
  @IsNotEmpty()
  imgColor: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  textColor: string;
  @IsString()
  @IsNotEmpty()
  textColor2: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  facebook: string;
  @IsString()
  @IsNotEmpty()
  facebookColor: string;
  @IsString()
  @IsNotEmpty()
  instagram: string;
  @IsString()
  @IsNotEmpty()
  instagramColor: string;
  @IsString()
  @IsNotEmpty()
  linkedin: string;
  @IsString()
  @IsNotEmpty()
  linkedinColor: string;
  @IsString()
  @IsNotEmpty()
  youtube: string;
  @IsString()
  @IsNotEmpty()
  youtubeColor: string;
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}

export class UpdateCardDto extends PartialType(CreateCardDto){}
export class DeleteCardDto extends PartialType(CreateCardDto){}

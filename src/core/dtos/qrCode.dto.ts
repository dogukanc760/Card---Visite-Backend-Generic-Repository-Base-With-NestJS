import {
  IsString,
  IsNotEmpty,
  IsDate,
  MaxLength,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export class CreateQrCodeDto {
    @IsString()
    @IsNotEmpty()
    userId:string;
    @IsString()
    @IsNotEmpty()
    qrContent:string;
    @IsString()
    @IsNotEmpty()
    content:string;
    @IsString()
    @IsNotEmpty()
    description:string;
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsBoolean()
    isActive:boolean;
    @IsBoolean()
    status:boolean;
}

export class UpdateQrCodeDto extends PartialType(CreateQrCodeDto){}
export class DeleteQrCodeDto extends PartialType(CreateQrCodeDto){}
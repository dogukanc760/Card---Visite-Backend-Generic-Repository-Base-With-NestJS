import { Injectable } from '@nestjs/common';
import { CreateQrCodeDto, UpdateQrCodeDto } from 'src/core/dtos';
import { QrCode } from 'src/core/entities';

// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
// import environment from 'src/environment/environment';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class QrCodeFactoryService {
  createNewQrCode(qrCodeListDto: CreateQrCodeDto) {
    const newQrCode = new QrCode();
    newQrCode.description = qrCodeListDto.description;
    newQrCode.content = qrCodeListDto.content;
    newQrCode.isActive = qrCodeListDto.isActive;
    newQrCode.qrContent = qrCodeListDto.qrContent;
    newQrCode.status = qrCodeListDto.status;
    newQrCode.title = qrCodeListDto.title;
    newQrCode.userId = qrCodeListDto.userId;

    return newQrCode;
  }

  updateQrCode(updateQrCodeDto: UpdateQrCodeDto) {
    const newQrCode = new QrCode();
    newQrCode.description = updateQrCodeDto.description;
    newQrCode.content = updateQrCodeDto.content;
    newQrCode.isActive = updateQrCodeDto.isActive;
    newQrCode.qrContent = updateQrCodeDto.qrContent;
    newQrCode.status = updateQrCodeDto.status;
    newQrCode.title = updateQrCodeDto.title;
    newQrCode.userId = updateQrCodeDto.userId;

    return newQrCode;
  }
}

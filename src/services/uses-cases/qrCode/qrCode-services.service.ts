import { Injectable } from '@nestjs/common';
import { CreateQrCodeDto, UpdateQrCodeDto } from 'src/core/dtos';
import { QrCode } from 'src/core/entities';

import { IDataService } from '../../../core/abstracts';
import { QrCodeFactoryService } from './qrCode-factory.service';


@Injectable()
export class QrCodeServices {
  constructor(
    private dataServices: IDataService,
    private QrCodeFactoryService: QrCodeFactoryService,
  ) {}

  getAllQrCode(): Promise<QrCode[]> {
    return this.dataServices.qrCodes.getAll();
  }

  async getQrCodeByUser(id: any): Promise<QrCode[]> {
    const qrCodes = (await this.dataServices.qrCodes.getAll()).filter(
      (x) => x.userId == id
    );
    return qrCodes;
  }

  getQrCodeById(id: any): Promise<QrCode> {
    return this.dataServices.qrCodes.get(id);
  }

  createQrCode(createQrCodeDto: CreateQrCodeDto): Promise<QrCode> {
    try {
      const qrCodes =
        this.QrCodeFactoryService.createNewQrCode(createQrCodeDto);
      return this.dataServices.qrCodes.create(qrCodes);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  updateQrCode(
    callId: string,
    updateCallDto: UpdateQrCodeDto,
  ): Promise<QrCode> {
    const qrCodes = this.QrCodeFactoryService.updateQrCode(updateCallDto);
    return this.dataServices.qrCodes.update(callId, qrCodes);
  }
}

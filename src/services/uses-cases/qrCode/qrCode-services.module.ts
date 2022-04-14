import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { QrCodeServices } from './qrCode-services.service';



@Module({
  imports: [DataServicesModule],
  providers: [QrCodesServicesModule, QrCodeServices],
  exports: [QrCodesServicesModule, QrCodeServices],
})
export class QrCodesServicesModule {}
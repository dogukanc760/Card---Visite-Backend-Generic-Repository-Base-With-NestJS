import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { QrCodeFactoryService } from './qrCode-factory.service';
import { QrCodeServices } from './qrCode-services.service';



@Module({
  imports: [DataServicesModule],
  providers: [QrCodeFactoryService, QrCodeServices],
  exports: [QrCodeFactoryService, QrCodeServices],
})
export class QrCodesServicesModule {}
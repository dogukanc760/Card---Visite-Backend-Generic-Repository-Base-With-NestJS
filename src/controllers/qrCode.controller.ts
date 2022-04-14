import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';
import {
  ApiBadGatewayResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import environment from 'src/environment/environment';
import { QrCode } from 'src/frameworks/data-services/mongo/model';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { CreateQrCodeDto, UpdateQrCodeDto } from '../core/dtos';
import { QrCodeServices } from 'src/services';


@Controller('/qrcode')
@ApiTags('QrCode Endpoints')
@UseInterceptors(TransformInterceptor)
export class QrCodeController {
  constructor(private QrCodeServices: QrCodeServices) {}

  @Get()
  async getAll() {
    return this.QrCodeServices.getAllQrCode();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.QrCodeServices.getQrCodeById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateQrCodeDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  createQrCode(@Body() QrCodeDto: CreateQrCodeDto) {
    return this.QrCodeServices.createQrCode(QrCodeDto);
  }

  @Put(':id')
  updateQrCode(
    @Param('id') QrCodeId: string,
    @Body() updateQrCodeDto: UpdateQrCodeDto,
  ) {
    return this.QrCodeServices.updateQrCode(QrCodeId, updateQrCodeDto);
  }
}

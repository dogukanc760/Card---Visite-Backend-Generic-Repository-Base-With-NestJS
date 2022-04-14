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
import { CreateCallListDto, UpdateCallListDto } from 'src/core/dtos';
import environment from 'src/environment/environment';

import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { CallListServices } from 'src/services';

@Controller('/call-list')
@ApiTags('Call Lists Endpoints')
@UseInterceptors(TransformInterceptor)
export class CallListController {
  constructor(private CallListServices: CallListServices) {}

  @Get()
  async getAll() {
    return this.CallListServices.getAllCallList();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.CallListServices.getCallListById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateCallListDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  createCall(@Body() CallListDto: CreateCallListDto) {
    try {
      return this.CallListServices.createCall(CallListDto);
    } catch (error) {
      return error;
    }
  }

  @Put(':id')
  updateCall(
    @Param('id') callId: string,
    @Body() updateCallListDto: UpdateCallListDto,
  ) {
    return this.CallListServices.updateCall(callId, updateCallListDto);
  }

  @Get('/get-by-user/:id')
  getByUser(@Param('id') id: any) {
    return this.CallListServices.getCallListByUser(id);
  }
}

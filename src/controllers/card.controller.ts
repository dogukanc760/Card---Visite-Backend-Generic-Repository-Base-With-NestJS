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
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { CardServices } from 'src/services';

import { CreateCardDto, UpdateCardDto } from '../core/dtos';


@Controller('/card')
@ApiTags('Card Endpoints')
@UseInterceptors(TransformInterceptor)
export class CardController {
  constructor(
    private CardServices: CardServices,
  ) {}

  @Get()
  async getAll() {
    return this.CardServices.getAllCard();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.CardServices.getCardById(id);
  }

  @Post()
  createCard(@Body() CardDto: CreateCardDto) {
    const createCardDto = new CreateCardDto();
    try {
      return this.CardServices.createCall(CardDto);
    } catch (error) {
      return error;
    }
  }

  @Put(':id')
  updateCard(
    @Param('id') CardId: string,
    @Body() updateCardDto: UpdateCardDto,
  ) {
    return this.CardServices.updateCall(CardId, updateCardDto);
  }
}

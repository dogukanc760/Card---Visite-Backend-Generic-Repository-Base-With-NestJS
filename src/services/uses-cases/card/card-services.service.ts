import { Injectable } from '@nestjs/common';
import { CreateCardDto, UpdateCardDto } from 'src/core/dtos';
import { Card } from 'src/core/entities';

import { IDataService } from '../../../core/abstracts';
import { CardFactoryService } from './card-factory.service';


@Injectable()
export class CardServices {
  constructor(
    private dataServices: IDataService,
    private CardFactoryService: CardFactoryService,
  ) {}

  getAllCard(): Promise<Card[]> {
    return this.dataServices.cards.getAll();
  }

  async getCardByUser(id: any): Promise<Card[]> {
    const cards = (await this.dataServices.cards.getAll()).filter(
      (x) => x.userId == id
    );
    return cards;
  }

  getCardById(id: any): Promise<Card> {
    return this.dataServices.cards.get(id);
  }

  createCall(createCardDto: CreateCardDto): Promise<Card> {
    try {
      const cards =
        this.CardFactoryService.createNewCard(createCardDto);
      return this.dataServices.cards.create(cards);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  updateCall(
    callId: string,
    updateCallDto: UpdateCardDto,
  ): Promise<Card> {
    const cards = this.CardFactoryService.updateCard(updateCallDto);
    return this.dataServices.cards.update(callId, cards);
  }
}

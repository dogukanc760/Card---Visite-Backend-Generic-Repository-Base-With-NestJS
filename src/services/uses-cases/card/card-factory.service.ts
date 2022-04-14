import { Injectable } from '@nestjs/common';
import { CreateCardDto, UpdateCardDto } from 'src/core/dtos';
import { Card } from 'src/core/entities';


// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
// import environment from 'src/environment/environment';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class CardFactoryService {
  createNewCard(createCardDto: CreateCardDto) {
    const newCard = new Card();
    newCard.companyLogo = createCardDto.companyLogo;
    newCard.companyName = createCardDto.companyName;
    newCard.description = createCardDto.description;
    newCard.facebook = createCardDto.facebook;
    newCard.facebookColor = createCardDto.facebookColor;
    newCard.imgColor = createCardDto.imgColor;
    newCard.imgUrl = createCardDto.imgUrl;
    newCard.instagram = createCardDto.instagram;
    newCard.instagramColor = createCardDto.instagramColor;
    newCard.isActive = createCardDto.isActive;
    newCard.linkedin = createCardDto.linkedin;
    newCard.linkedinColor = createCardDto.linkedinColor;
    newCard.logoColor = createCardDto.logoColor;
    newCard.status = createCardDto.status;
    newCard.textColor = createCardDto.textColor;
    newCard.textColor2 = createCardDto.textColor2;
    newCard.title = createCardDto.title;
    newCard.userId = createCardDto.userId;
    newCard.youtube = createCardDto.youtube;
    newCard.youtubeColor = createCardDto.youtubeColor;

    return newCard;
  }

  updateCard(updateCardDto: UpdateCardDto) {
    const newCard = new Card();
    newCard.companyLogo = updateCardDto.companyLogo;
    newCard.companyName = updateCardDto.companyName;
    newCard.description = updateCardDto.description;
    newCard.facebook = updateCardDto.facebook;
    newCard.facebookColor = updateCardDto.facebookColor;
    newCard.imgColor = updateCardDto.imgColor;
    newCard.imgUrl = updateCardDto.imgUrl;
    newCard.instagram = updateCardDto.instagram;
    newCard.instagramColor = updateCardDto.instagramColor;
    newCard.isActive = updateCardDto.isActive;
    newCard.linkedin = updateCardDto.linkedin;
    newCard.linkedinColor = updateCardDto.linkedinColor;
    newCard.logoColor = updateCardDto.logoColor;
    newCard.status = updateCardDto.status;
    newCard.textColor = updateCardDto.textColor;
    newCard.textColor2 = updateCardDto.textColor2;
    newCard.title = updateCardDto.title;
    newCard.userId = updateCardDto.userId;
    newCard.youtube = updateCardDto.youtube;
    newCard.youtubeColor = updateCardDto.youtubeColor;
    return newCard;
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card{
    @Prop({required:true})
    userId:string;
    @Prop()
    companyLogo:string;
    @Prop()
    logoColor:string;
    @Prop()
    companyName:string;
    @Prop()
    imgUrl:string;
    @Prop()
    imgColor:string;
    @Prop()
    description:string;
    @Prop()
    textColor:string;
    @Prop()
    textColor2:string;
    @Prop()
    title:string;
    @Prop()
    facebook:string;
    @Prop()
    facebookColor:string;
    @Prop()
    instagram:string;
    @Prop()
    instagramColor:string;
    @Prop()
    linkedin:string;
    @Prop()
    linkedinColor:string;
    @Prop()
    youtube:string;
    @Prop()
    youtubeColor:string;
    @Prop({default:true})
    isActive:boolean;
    @Prop({default:true})
    status:boolean;
}

export const CardSchema = SchemaFactory.createForClass(Card);
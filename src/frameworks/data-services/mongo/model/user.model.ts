import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop()
  companyName: string;

  @Prop({ required: true })
  gsm: string;

  @Prop()
  gsm1: string;

  @Prop()
  gsm2: string;

  @Prop({ required: true })
  mail: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  distinct: string;

  @Prop({ default: false })
  isBan: boolean;

  @Prop({ default: '' })
  banTime: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

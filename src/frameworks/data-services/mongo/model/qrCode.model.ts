import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type QrCodeDocument = QrCode & Document;

@Schema()
export class QrCode {
  @Prop({ required: true })
  userId: string;
  @Prop()
  qrContent: string;
  @Prop()
  content: string;
  @Prop()
  description: string;
  @Prop()
  title: string;
  @Prop({ default: true })
  isActive: boolean;
  @Prop({ default: true })
  status: boolean;
}

export const QrCodeSchema = SchemaFactory.createForClass(QrCode);

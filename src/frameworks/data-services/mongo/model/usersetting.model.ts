import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserSettingDocument = UserSetting & Document;

@Schema()
export class UserSetting{
    @Prop({required:true})
    userId: string;
    @Prop()
    linkedIn: string;
    @Prop()
    facebook: string;
    @Prop()
    instagram: string;
    @Prop()
    youtube: string;
    @Prop()
    telegram: string;
}

export const UserSettingSchema = SchemaFactory.createForClass(UserSetting);
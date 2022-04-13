import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CallListDocument = CallList & Document;


@Schema()
export class CallList {
    @Prop({required:true})
    fromUserId: string;
    @Prop({required:true})
    fromUserName: string;
    @Prop()
    fromCompanyName: string;
    @Prop()
    fromUserGsm: string;
    @Prop()
    toUserId: string;
    @Prop()
    toUserName: string;
    @Prop()
    toCompanyName: string;
    @Prop()
    toUserGsm: string;
    @Prop()
    whyContent: string;
    @Prop()
    description: string;
    @Prop()
    title: string;
    @Prop({default:true})
    status: boolean;
    @Prop({default:true})
    isActive: boolean;
}

export const CallListSchema = SchemaFactory.createForClass(CallList);
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type MeasurementDocument = Measurement & Document;

@Schema()
export class Measurement {
  @Prop({ required: true })
  id_phone: string;
}

export const MeasurementSchema = SchemaFactory.createForClass(Measurement);

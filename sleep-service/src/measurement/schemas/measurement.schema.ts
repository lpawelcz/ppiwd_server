import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Sleep } from './_sleep.schema';
import { Data } from './_data.schema';
import { Questionnaire } from './_questionnaire.schema';

export type MeasurementDocument = Measurement & Document;

@Schema()
export class Measurement {
  @Prop({ required: true })
  id_phone: string;

  @Prop()
  sleep: Sleep;

  @Prop()
  questionnaire: Questionnaire

  @Prop()
  data: Data
}

export const MeasurementSchema = SchemaFactory.createForClass(Measurement);

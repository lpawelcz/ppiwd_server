import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Sleep {
  @Prop()
  start: Number

  @Prop()
  end: Number
}

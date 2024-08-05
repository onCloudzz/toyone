import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  name: string;

  @Prop()
  content: string;

  @Prop()
  hits: number;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);

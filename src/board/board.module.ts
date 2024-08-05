import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardMongoRepository } from './board.repository';
import { Board, BoardSchema } from './board.schema';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://onCloud:Pinbol0315@cluster0.63loqzc.mongodb.net/toybox',
    ),
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
  ],
  controllers: [BoardController],
  providers: [BoardMongoRepository, BoardService],
})
export class BoardModule {}

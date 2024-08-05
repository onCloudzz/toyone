import { Module } from '@nestjs/common';
import { AppController } from './toyone.controller';
import { AppService } from './toyone.service';
import { BoardModule } from './board/board.module';

@Module({
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

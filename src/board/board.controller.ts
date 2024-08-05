import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('toyboard')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/hello')
  getHello(): string {
    return this.boardService.getHello();
  }

  @Get('/bye')
  getBye(): string {
    return this.boardService.getBye();
  }

  @Get('/')
  getAll() {
    return this.boardService.getAll();
  }

  @Post('/')
  createPost(@Body() post) {
    this.boardService.createPost(post);
    return 'success';
  }

  @Get('/:id')
  async getPost(@Param('id') id: string) {
    return await this.boardService.getPost(id);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    this.boardService.deletePost(id);
    return 'success';
  }

  @Put('/:id')
  updatePost(@Param('id') id, @Body() post) {
    this.boardService.updatePost(id, post);
  }
}

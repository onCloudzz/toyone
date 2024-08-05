import { Injectable } from '@nestjs/common';
import { Post } from './board.entities';
import { BoardMongoRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(private boardRepository: BoardMongoRepository) {}
  getHello(): string {
    return 'Hello World!';
  }

  getBye(): string {
    return 'Bye World!';
  }

  async getAll() {
    return await this.boardRepository.getAllPost();
  }

  createPost(post: Post) {
    this.boardRepository.createPost(post);
  }

  async getPost(id) {
    return await this.boardRepository.getPost(id);
  }

  deletePost(id) {
    this.boardRepository.deletePost(id);
  }

  updatePost(id, post: Post) {
    this.boardRepository.updatePost(id, post);
  }
}

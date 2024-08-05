import { Post } from './board.entities';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board, BoardDocument } from './board.schema';

export interface BoardRepository {
  getAllPost(): Promise<Board[]>;
  getPost(id: string): Promise<Post>;
  createPost(post: Post): Promise<Board>;
  deletePost(id: string): Promise<void>;
  updatePost(id: string, post: Post): Promise<Board>;
}

@Injectable()
export class BoardMongoRepository implements BoardRepository {
  constructor(
    @InjectModel(Board.name) private boardModel: Model<BoardDocument>,
  ) {}

  async getAllPost(): Promise<Board[]> {
    return await this.boardModel.find().exec();
  }

  async getPost(id: string): Promise<Post> {
    return await this.boardModel.findById(id);
  }

  async createPost(post: Post): Promise<Board> {
    const createPost = {
      ...post,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return await this.boardModel.create(createPost);
  }

  async deletePost(id: string): Promise<void> {
    await this.boardModel.findByIdAndDelete(id).exec();
  }

  async updatePost(id: string, post: Post): Promise<Board> {
    return await this.boardModel.findByIdAndUpdate(id, post).exec();
  }
}

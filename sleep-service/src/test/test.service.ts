import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test, TestDocument } from './schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

  async create(createCatDto: CreateTestDto): Promise<Test> {
    const createdTest = new this.testModel(createCatDto);
    return createdTest.save();
  }

  async findAll(): Promise<Test[]> {
    return this.testModel.find().exec();
  }
}

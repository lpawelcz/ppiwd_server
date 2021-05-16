import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Measurement, MeasurementDocument } from './schemas/measurement.schema';

@Injectable()
export class MeasurementService {
  constructor(@InjectModel(Measurement.name) private measurementModel: Model<MeasurementDocument>) {}

  async create(data): Promise<Measurement> {
    const createdTest = new this.measurementModel(data);
    return createdTest.save();
  }

  /*async findAll(): Promise<Test[]> {
    return this.testModel.find().exec();
  } */
}

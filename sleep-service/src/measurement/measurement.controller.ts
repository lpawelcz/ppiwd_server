import { Controller, Get, Post, Body } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { Request } from 'express';

@Controller('measurement')
export class MeasurementController {
  constructor(private readonly service: MeasurementService) {}

  @Post('/create')
  create(@Body() request) {
    return this.service.create(request)
  }
}

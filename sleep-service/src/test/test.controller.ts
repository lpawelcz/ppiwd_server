import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private readonly service: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.service.create(createTestDto)
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }
}
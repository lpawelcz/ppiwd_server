import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';
import { MeasurementModule } from './measurement/measurement.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/sleep', {
      auth: {
        user: "admin",
        password: "admin"
      },
      authSource: "admin"
  }),
    TestModule
    MeasurementModule,
  ],
  controllers: [PingController],
  providers: [PingService],
})
export class AppModule {}

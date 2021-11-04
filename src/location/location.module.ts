import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Location])],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}

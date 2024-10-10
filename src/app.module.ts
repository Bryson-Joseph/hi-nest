import { Module } from '@nestjs/common';
import {} from './app.controller';
import {} from './app.service';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}

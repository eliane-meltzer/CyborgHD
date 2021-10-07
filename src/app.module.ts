import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import {HttpModule} from "@nestjs/axios";
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';


@Module({
  imports: [ConfigModule.forRoot(), MoviesModule, HttpModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../dist/', 'frontend'),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClient } from './config/entity/UserClient';
import entities from './config/entity'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hotels',
      synchronize: true,
      entities
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

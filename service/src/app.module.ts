import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthClientModule from './serviceProvider/auth/client/authClient.module';
import entities from './settings/typeorms'
@Module({
  imports: [
    AuthClientModule,
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

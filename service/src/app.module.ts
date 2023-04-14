import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './serviceProvider/auth/auth.module';
import { UsersModule } from './serviceProvider/users/users.module';
import entities from './settings/typeorms';
import { APP_GUARD } from '@nestjs/core';
import { HotelModule } from './serviceProvider/hotels/hotel.controller';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    HotelModule,
     PassportModule.register({ session: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "hotels",
      synchronize: true,
      entities,
      // logging: true
    }),
  ],
  controllers: [],
  providers: [
  ]
})
export class AppModule {}

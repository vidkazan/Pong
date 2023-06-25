import { Controller, Get, Redirect,Post, UseGuards, Res, Body, Request } from '@nestjs/common';
// import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User as UserModel } from '@prisma/client';
import { encodePassword } from './utils/bcrypt';
import { LocalAuthGuard } from './auth/auth.guards';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
              private configService: ConfigService,
              private authService: AuthService) {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return "https://www.google.com/";
  }

  @Get('zaq')
  //@Redirect("https://www.google.com/", 301)
  getGooggle(): string {
    //return this.appService.getHello();
    return "https://www.google.com/";
  }
}
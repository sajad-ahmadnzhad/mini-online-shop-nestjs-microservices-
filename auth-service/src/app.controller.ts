import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { ISignup } from './interfaces/signup.interface';
import { ISignin } from './interfaces/signin.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('signup')
  signup(dto: ISignup) {
    return this.appService.signup(dto);
  }

  @MessagePattern('signin')
  signin(dto: ISignin) {
    return this.appService.signin(dto)
  }
}

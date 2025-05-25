import {
  Controller,
  Post,
  Get,
  Query,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Redirect,
  Res,
  Body,
} from '@nestjs/common';
import { Response } from 'express';
import { UserRepository } from 'src/user/user-repository/user-repository';

@Controller('/api/auth/')
export class AuthController {
  constructor(private UserRepository: UserRepository) {}

  @Get('/set-cookie')
  setCookie(@Query() name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('set cookie sucessfully');
  }

  @Post('/register')
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: string,
    @Body('gender') gender: string,
    @Body('phone') phone: string,
    @Body('is_vetified') is_vetified: boolean,
    @Body('ktp_url') ktp_url: string,
    @Body('selfie_url') selfie_url: string,
    @Body('lat') lat: GLfloat,
    @Body('lang') lang: GLfloat,
  ): Promise<any> {
    return await this.UserRepository.save(
      name,
      email,
      password,
      role,
      gender,
      phone,
      is_vetified,
      ktp_url,
      selfie_url,
      lang,
      lat,
    );
  }

  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(201)
  sampleResponse(): Record<string, string> {
    return {
      data: 'hello json',
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/auth/sample-response',
      statusCode: 301,
    };
  }

  @Get()
  sayHello(
    @Query('firstname') firstname: string,
    @Query('lastname') lastname: string,
  ): string {
    return `my firstname is ${firstname} and my lastname is ${lastname}`;
  }

  @Post('/login')
  login(): string {
    return 'login sucesfully';
  }

  @Post('/logout')
  logout(): string {
    return 'logout sucesfully';
  }

  @Post('/forgot-password')
  forgotPassword(): string {
    return 'forgot password page';
  }

  @Post('/email-verification')
  emailVerification(): string {
    return 'email verification sucessfully';
  }

  @Post('/change-password')
  changePassword(): string {
    return 'change password sucesfully';
  }
}

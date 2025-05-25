import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Req,
  Query,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { Connection } from '../connection/connection';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(
    private connection: Connection,
    private service: UserService,
  ) {}

  @Get('/connection')
  getConnection(): string {
    return this.connection.getName();
  }

  @Get('say-hello')
  sayHello(@Query('name') name: string): string {
    return this.service.sayHello(name);
  }

  @Post()
  post(): string {
    return 'post';
  }

  @Get('/:id')
  getById(@Req() request: Request): string {
    return `GET ${request.params.id}`;
  }

  @Put()
  put(): string {
    return 'put';
  }

  @Delete()
  delete(): string {
    return 'delete';
  }
}

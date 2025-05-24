import { Controller, Post, Get, Put, Delete, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
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

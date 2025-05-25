import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import {
  Connection,
  MysqlConnection,
  PostgreSQLConnection,
} from './connection/connection';
import { UserService } from './user/user.service';
import { UserRepository } from './user-repository/user-repository';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass:
        process.env.DATABASE == 'PostgreSQL'
          ? PostgreSQLConnection
          : MysqlConnection,
    },
    UserRepository,
    PrismaService,
  ],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserRepository } from 'src/user/user-repository/user-repository';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [UserRepository, PrismaService],
})
export class AuthModule {}

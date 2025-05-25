import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {
    console.info('create user repository');
  }

  async save(
    name: string,
    email: string,
    password: string,
    role: string,
    gender: string,
    phone: string,
    is_verified: boolean,
    ktp_url: string,
    selfie_url: string,
    lat?: GLfloat,
    lang?: GLfloat,
  ): Promise<any> {
    return this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        role,
        gender,
        phone,
        is_verified,
        ktp_url,
        selfie_url,
        lat,
        lang,
      },
    });
  }
}

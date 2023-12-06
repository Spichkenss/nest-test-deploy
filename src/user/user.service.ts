import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client"
import { UserFindAllParams, UserUpdateParams } from "./types/user.arg-types";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(
    createUserDto: CreateUserDto
  ): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto
    })
  }

  async findAll({
    skip,
    take,
    where
  }: UserFindAllParams): Promise<User[]> {
    return this.prisma.user.findMany({
      skip: skip || undefined,
      take: take || undefined,
      where
    });
  }

  async findOne(
    id: string
  ): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  async update({
    id,
    updateUserDto
  }: UserUpdateParams): Promise<User> {
    return this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto
    })
  }

  async remove(
    id: string
  ): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}

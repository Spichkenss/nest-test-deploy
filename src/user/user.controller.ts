import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "@prisma/client";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query("skip") skip?: string,
    @Query("take") take?: string
  ): Promise<User[]> {
    return this.userService.findAll({
      skip: Number(skip),
      take: Number(take),
      where: {}
    });
  }

  @Get(":id")
  findOne(
    @Param("id") id: string
  ): Promise<User> {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.update({ id, updateUserDto });
  }

  @Delete(":id")
  remove(
    @Param("id") id: string
  ): Promise<User> {
    return this.userService.remove(id);
  }
}

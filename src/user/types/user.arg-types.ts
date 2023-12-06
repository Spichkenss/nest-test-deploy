import { Prisma } from "@prisma/client";
import { UpdateUserDto } from "../dto/update-user.dto";

export interface UserFindAllParams {
    skip?: number;
    take?: number;
    where?: Prisma.UserWhereInput;
}

export interface UserUpdateParams {
    id: string;
    updateUserDto: UpdateUserDto;
}
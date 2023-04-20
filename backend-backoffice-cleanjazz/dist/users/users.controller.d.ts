import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { user } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(newUser: createUserDto): Promise<user | import("@nestjs/common").HttpException>;
    getUsers(): Promise<user[]>;
    getUser(id: number): Promise<user | import("@nestjs/common").HttpException>;
    deleteUser(id: number): Promise<import("@nestjs/common").HttpException | (user & {
        estado: string;
    })>;
    updateUser(id: number, user: UpdateUserDto): Promise<import("@nestjs/common").HttpException | (user & UpdateUserDto)>;
}

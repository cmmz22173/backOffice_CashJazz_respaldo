import { HttpException } from '@nestjs/common';
import { user } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<user>);
    createUser(user: createUserDto): Promise<user | HttpException>;
    getUsers(): Promise<user[]>;
    getUser(id: number): Promise<user | HttpException>;
    deleteUser(id: number): Promise<HttpException | (user & {
        estado: string;
    })>;
    updateUser(id: number, user: UpdateUserDto): Promise<HttpException | (user & UpdateUserDto)>;
}

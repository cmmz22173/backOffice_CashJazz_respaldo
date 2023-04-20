import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { user } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(user) private userRepository: Repository<user>) { }

    //metodo para insertar usuarios con httpException
    async createUser(user: createUserDto){
        const userFound = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        })
        if(userFound){
            return new HttpException('User already exists', HttpStatus.CONFLICT)
        }
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    //metodo para obtener todos los usuarios
    getUsers(){
        return this.userRepository.find(
            {where: {estado: 'activo'}}
        )
    }

    //metodo para obtener un usuario por id con httpException
    async getUser(id: number){
        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        })
        if(!userFound){
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        return userFound;
    }

    //metodo para borrar Usuario con httpException
    async deleteUser(id: number){
        
        const userFound = await this.userRepository.findOne({
            where: {
                id}
        })
        if(!userFound){
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        const updateUser = Object.assign(userFound, {estado: 'inactivo'})
        return this.userRepository.save(updateUser)
    }

    //metodo para actualizar Usuario con httpException

    async updateUser(id: number, user: UpdateUserDto){
        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        })
        if(!userFound){
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        const updateUser = Object.assign(userFound, user)
        return this.userRepository.save(updateUser)

    }

      
}

import { Controller, Post ,Body, Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { user } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }
    //metodo para insertar usuarios
    @Post()
    createUser(@Body() newUser: createUserDto) {
        return this.userService.createUser(newUser)
    }

    //metodo para obtener todos los usuarios
    @Get()
    getUsers(): Promise<user[]> {
        return this.userService.getUsers()
    }

    //metodo para obtener un usuario por id
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUser(id)
    }

    //metodo para borrar Usuario
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id)
    }

    //metodo para actualizar Usuario
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        return this.userService.updateUser(id, user)

    }
    
}

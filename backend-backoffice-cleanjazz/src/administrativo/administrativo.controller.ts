import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Injectable } from '@nestjs/common';
import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';
import { AdministrativoService } from './administrativo.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
@Controller('administrativo')
export class AdministrativoController {

    constructor(private administrativoService: AdministrativoService, private jwtService: JwtService) {}

    //para crear administrativo
    @Post()
    async createadministrativo(@Body() administrativo: CreateAdministrativoDto){
        return await this.administrativoService.createadministrativo(administrativo)
    }
    //para obtener todos los administrativos
    @Get()
    async getTurnosGuardia(){
        return await this.administrativoService.getTurnosGuardia()
    }
    //para obtener un administrativo por id
    @Get("id")
    async getadministrativo(@Param("id", ParseIntPipe) id: number){
        return await this.administrativoService.getadministrativo(id)
    }

    //para actualizar administrativo
    @Patch("id")
    async updateadministrativo(@Param("id", ParseIntPipe) id: number, @Body() administrativo: UpdateAdministrativoDto){
        return await this.administrativoService.updateadministrativo(id, administrativo)
    }

     //para autenticar al usuario y devolver un token JWT
     @Post('login')
     async login(@Body() credentials: { username: string, password: string }) {
         const { username, password } = credentials;
 
         // Obtener el administrativo correspondiente al nombre de usuario
         const administrativo = await this.administrativoService.findOne(username);
 
         if (administrativo) {
             // Verificar si la contraseña es válida
             const isValidPassword = await password===administrativo.clave?true:false;
 
             if (isValidPassword) {
                 // Generar el token JWT
                 const payload = { username: administrativo.usuario, sub: administrativo.id };
                 const accessToken = this.jwtService.sign(payload, { expiresIn: '30m' });
                        
                 // Devolver el token JWT generado
                 return { accessToken };
             }
         }
 
         // Si las credenciales son inválidas, lanzar una excepción
         throw new UnauthorizedException('Credenciales inválidas');
     
 }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { grupo } from './grupo.entity';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
@Injectable()
export class GrupoService {

    constructor (@InjectRepository(grupo) private grupoRepository: Repository <grupo>) { }

    //metodo para insertar grupo con httpException
    async createGrupo(grupo: CreateGrupoDto){
        const grupoFound = await this.grupoRepository.findOne({
            where: {
                nombreGrupo: grupo.nombreGrupo
            }
        })
        if(grupoFound){
            return new HttpException('Grupo already exists', HttpStatus.CONFLICT)
        }
        const newGrupo = this.grupoRepository.create(grupo)
        return this.grupoRepository.save(newGrupo)
    }

    //metodo para obtener un grupo con httpException
    async getGrupo(id: number){
        const grupoFound = await this.grupoRepository.findOne({
            where: {
                id
            }
        })
        if(!grupoFound){
            return new HttpException('Grupo not found', HttpStatus.NOT_FOUND)
        }
        return grupoFound;
    }

    //metodo para obtener todos los grupos con httpException
    async getGrupos(){
        const gruposFound = await this.grupoRepository.find()
        if(!gruposFound){
            return new HttpException('Grupos not found', HttpStatus.NOT_FOUND)
        }
        return gruposFound;
    }
    //metodo para actualizar grupo  con httpException
    async updateGrupo(id: number, grupo: UpdateGrupoDto){

        const grupoFound = await this.grupoRepository.findOne({
            where: {
                id
            }
        })
        if(!grupoFound){
            return new HttpException('Grupo not found', HttpStatus.NOT_FOUND)
        }
        const updateGrupo = Object.assign(grupoFound, grupo)
        return this.grupoRepository.save(updateGrupo)
    }


}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateLavadorDto } from './dto/update-lavador.dto';
import { CreateLavadorDto } from './dto/create-lavador.dto';
import { Lavador } from './lavador.entity';
@Injectable()
export class LavadorService {
    constructor(@InjectRepository(Lavador) private lavadorRepository: Repository<Lavador>) { }

    //metodo para insertar lavador con httpException
    async createLavador(lavador: CreateLavadorDto){
        const lavadorFound = await this.lavadorRepository.findOne({
            where: {
                empleado: lavador.empleadoId,
            }
        })
        if(lavadorFound){
            return new HttpException('lavador already exists', HttpStatus.CONFLICT)
        }
        const newlavador = this.lavadorRepository.create(lavador)
        return this.lavadorRepository.save(newlavador)
    }

    

    //metodo para obtener un lavador por id con httpException
    async getLavador(id: number){
        const lavadorFound = await this.lavadorRepository.findOne({
            where: {
                id
            }
        })
        if(!lavadorFound){
            return new HttpException('lavador  not found', HttpStatus.NOT_FOUND)
        }
        return lavadorFound;
    }

    //metodo para obtener todos los lavadors con httpException
    async getLavadors(){
        const lavadors = await this.lavadorRepository.find()
        if(!lavadors){
            return new HttpException('lavadors  not found', HttpStatus.NOT_FOUND)
        }
        return lavadors;
    }
    

    //metodo para actualizar lavador con httpException

    async updateLavador(id: number, lavador: UpdateLavadorDto){
        const lavadorFound = await this.lavadorRepository.findOne({
            where: {
                id
            }
        })
        if(!lavadorFound){
            return new HttpException('lavador not found', HttpStatus.NOT_FOUND)
        }
        const updatelavador = Object.assign(lavadorFound, lavador)
        return this.lavadorRepository.save(updatelavador)

}

}

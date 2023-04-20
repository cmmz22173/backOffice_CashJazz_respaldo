import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { guardia } from './guardia.entity';
import { CreateGuardiaDto } from './dto/create-guardia.dto';
import { updateGuardiaDto } from './dto/update-guardia.dto';
@Injectable()
export class GuardiaService {

    constructor(@InjectRepository(guardia) private guardiaRepository: Repository<guardia>) { }

    //metodo para insertar guardia con httpException
    async createGuardia(Guardia: CreateGuardiaDto){
        const guardiaFound = await this.guardiaRepository.findOne({
        })
        if(guardiaFound){
            return new HttpException('Guardia already exists', HttpStatus.CONFLICT)
        }
        const newGuardia = this.guardiaRepository.create(Guardia)
        return this.guardiaRepository.save(newGuardia)
    }

    

    //metodo para obtener un guardia por id con httpException
    async getGuardia(id: number){
        const guardiaFound = await this.guardiaRepository.findOne({
            where: {
                id
            }
        })
        if(!guardiaFound){
            return new HttpException('guardia Guardia not found', HttpStatus.NOT_FOUND)
        }
        return guardiaFound;
    }

    //metodo para obtener todos los turnos con httpException
    async getGuardias(){
        const guardiasFound = await this.guardiaRepository.find()
        if(!guardiasFound){
            return new HttpException('Turnos Guardia not found', HttpStatus.NOT_FOUND)
        }
        return guardiasFound;
    }
    

    //metodo para actualizar guardia con httpException

    async updateGuardia(id: number, guardia: updateGuardiaDto){
        const guardiaFound = await this.guardiaRepository.findOne({
            where: {
                id
            }
        })
        if(!guardiaFound){
            return new HttpException('guardia Guardia not found', HttpStatus.NOT_FOUND)
        }
        const updateTurnoGuardia = Object.assign(guardiaFound, guardia)
        return this.guardiaRepository.save(updateTurnoGuardia)

}
}

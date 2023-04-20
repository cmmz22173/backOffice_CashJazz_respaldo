import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TurnoGuardia } from './turno-guardia.entity';
import { createTurnoGuardiaDto } from './dto/createTurnoGuardia.dto';
import { updateTurnoGuardiaDto } from './dto/updateTurnoGuartia.dto';
@Injectable()
export class TurnoGuardiaService {

    constructor(@InjectRepository(TurnoGuardia) private turnoGuardiaRepository: Repository<TurnoGuardia>) { }

    //metodo para insertar Turno con httpException
    async createTurnoGuardia(turnoGuardia: createTurnoGuardiaDto){
        const turnoGuardiaFound = await this.turnoGuardiaRepository.findOne({
            where: {
                turno: turnoGuardia.turno
            }
        })
        if(turnoGuardiaFound){
            return new HttpException('Turno Guardia already exists', HttpStatus.CONFLICT)
        }
        const newTurno = this.turnoGuardiaRepository.create(turnoGuardia)
        return this.turnoGuardiaRepository.save(newTurno)
    }

    

    //metodo para obtener un turno por id con httpException
    async getTurnoGuardia(id: number){
        const turnoGuardiaFound = await this.turnoGuardiaRepository.findOne({
            where: {
                id
            }
        })
        if(!turnoGuardiaFound){
            return new HttpException('Turno Guardia not found', HttpStatus.NOT_FOUND)
        }
        return turnoGuardiaFound;
    }

    //metodo para obtener todos los turnos con httpException
    async getTurnosGuardia(){
        const turnosGuardia = await this.turnoGuardiaRepository.find()
        if(!turnosGuardia){
            return new HttpException('Turnos Guardia not found', HttpStatus.NOT_FOUND)
        }
        return turnosGuardia;
    }
    

    //metodo para actualizar Turno con httpException

    async updateTurnoGuardia(id: number, turnoGuardia: updateTurnoGuardiaDto){
        const turnoGuardiaFound = await this.turnoGuardiaRepository.findOne({
            where: {
                id
            }
        })
        if(!turnoGuardiaFound){
            return new HttpException('Turno Guardia not found', HttpStatus.NOT_FOUND)
        }
        const updateTurnoGuardia = Object.assign(turnoGuardiaFound, turnoGuardia)
        return this.turnoGuardiaRepository.save(updateTurnoGuardia)

    }
}

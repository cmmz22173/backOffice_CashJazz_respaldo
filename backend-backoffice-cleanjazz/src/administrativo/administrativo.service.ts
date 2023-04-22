import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrativo } from './administrativo.entity';
import { CreateAdministrativoDto} from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';
@Injectable()
export class AdministrativoService {
    constructor(@InjectRepository(Administrativo) private administrativoRepository: Repository<Administrativo>) { }

    //metodo para insertar administratrivo con httpException
    async createadministrativo(administrativo: CreateAdministrativoDto){
        const administrativoFound = await this.administrativoRepository.findOne({
            where: {
                usuario: administrativo.usuario
            }
        })
        if(administrativoFound){
            return new HttpException('administratrivo Guardia already exists', HttpStatus.CONFLICT)
        }
        const newTurno = this.administrativoRepository.create(administrativo)
        return this.administrativoRepository.save(newTurno)
    }

    

    //metodo para obtener un turno por id con httpException
    async getadministrativo(id: number){
        const administrativoFound = await this.administrativoRepository.findOne({
            where: {
                id
            }
        })
        if(!administrativoFound){
            return new HttpException('administratrivo Guardia not found', HttpStatus.NOT_FOUND)
        }
        return administrativoFound;
    }

    //metodo para obtener todos los turnos con httpException
    async getTurnosGuardia(){
        const turnosGuardia = await this.administrativoRepository.find()
        if(!turnosGuardia){
            return new HttpException('Turnos Guardia not found', HttpStatus.NOT_FOUND)
        }
        return turnosGuardia;
    }
    

    //metodo para actualizar administratrivo con httpException

    async updateadministrativo(id: number, administrativo: UpdateAdministrativoDto){
        const administrativoFound = await this.administrativoRepository.findOne({
            where: {
                id
            }
        })
        if(!administrativoFound){
            return new HttpException('administratrivo Guardia not found', HttpStatus.NOT_FOUND)
        }
        const updateadministrativo = Object.assign(administrativoFound, administrativo)
        return this.administrativoRepository.save(updateadministrativo)

    }
    async findOne(usuario: string) {
        return await this.administrativoRepository.findOne({ where: { usuario } });
      }
      
    
}

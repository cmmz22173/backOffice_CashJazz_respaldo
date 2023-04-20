import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';
import { CreateTipoServicioDto } from './dto/create-tipo-servicio.dto';
import { TipoServicio } from './tipo-servicio.entity';
@Injectable()
export class TipoServicioService {
    constructor(@InjectRepository(TipoServicio) private tipoServicioRepository: Repository<TipoServicio>) { }

    //metodo para insertar tipoServico con httpException
    async createTipoServicio(tipoServicio: CreateTipoServicioDto){
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                nombreServicio: tipoServicio.nombreServicio
            }
        })
        if(tipoServicioFound){
            return new HttpException('tipoServicio already exists', HttpStatus.CONFLICT)
        }
        const newtipoServicio = this.tipoServicioRepository.create(tipoServicio)
        return this.tipoServicioRepository.save(newtipoServicio)
    }

    //metodo para obtener todos los tipoServicio
    getTipoServicios(){
        return this.tipoServicioRepository.find( )
    }

    //metodo para obtener un tipoServicio por id con httpException
    async getTipoServicio(id: number){
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        })
        if(!tipoServicioFound){
            return new HttpException('tipoServicio not found', HttpStatus.NOT_FOUND)
        }
        return tipoServicioFound;
    }

    //metodo para borrar Usuario con httpException
    async deleteTipoServicio(id: number){
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        })
        if(!tipoServicioFound){
            return new HttpException('tipoServicio not found', HttpStatus.NOT_FOUND)
        }
        return this.tipoServicioRepository.delete(id)
    }

    //metodo para actualizar Usuario con httpException

    async updateTipoServicio(id: number, tipoServicio: UpdateTipoServicioDto){
        const tipoServicioFound = await this.tipoServicioRepository.findOne({
            where: {
                id
            }
        })
        if(!tipoServicioFound){
            return new HttpException('tipoServicio not found', HttpStatus.NOT_FOUND)
        }
        const updateTipoServicio = Object.assign(tipoServicioFound, tipoServicio)
        return this.tipoServicioRepository.save(updateTipoServicio)

    }


}

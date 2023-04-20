import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { Inventario } from './inventario.entity';
@Injectable()
export class InventarioService {

    constructor(@InjectRepository(Inventario) private InventarioRepository: Repository<Inventario>) { }

    //metodo para insertar inventario con httpException
    async createInventario(Inventario: CreateInventarioDto){
        const InventarioFound = await this.InventarioRepository.findOne({
            where: {
            }
        })
        if(InventarioFound){
            return new HttpException('Inventario already exists', HttpStatus.CONFLICT)
        }
        const newInventario = this.InventarioRepository.create(Inventario)
        return this.InventarioRepository.save(newInventario)
    }

    //metodo para obtener todos los inventario
    getInventarios(){
        return this.InventarioRepository.find(
            
        )
    }

    //metodo para obtener un inventario por id con httpException
    async getInventario(id: number){
        const inventarioFound = await this.InventarioRepository.findOne({
            where: {
                id
            }
        })
        if(!inventarioFound){
            return new HttpException('inventario not found', HttpStatus.NOT_FOUND)
        }
        return inventarioFound;
    }


    //metodo para actualizar inventario con httpException

    async updateInventario(id: number, user: UpdateInventarioDto){
        const InventarioFound = await this.InventarioRepository.findOne({
            where: {
                id
            }
        })
        if(!InventarioFound){
            return new HttpException('Inventario not found', HttpStatus.NOT_FOUND)
        }
        const updateInventario = Object.assign(InventarioFound, Inventario)
        return this.InventarioRepository.save(updateInventario)

    }

}

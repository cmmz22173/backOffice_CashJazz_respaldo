import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoProducto } from './tipo-producto.entity';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';

@Injectable()
export class TipoProductoService {

    constructor(@InjectRepository(TipoProducto) private TipoProductoRepository: Repository<TipoProducto>) { }

    //Metodo que devuelve todos los tipos de productos con htttp Exception
    async getTipoProductos(): Promise<TipoProducto[]> {
        return await this.TipoProductoRepository.find();
    }


    //Metodo que devuelve un tipo de producto por su id con htttp Exception
    async getTipoProducto(id: number){
        const tipoProductoFound = await this.TipoProductoRepository.findOne({
            where: {
                id
            }
        })
        if(!tipoProductoFound){
            return new HttpException('tipoProducto not found', HttpStatus.NOT_FOUND)
        }
        return tipoProductoFound;
    }
    
    //Metodo que crea un tipo de producto con htttp Exception
    async createTipoProducto(tipoProducto: CreateTipoProductoDto){
        const tipoProductoFound = await this.TipoProductoRepository.findOne({
            where: {
                nombreProducto: tipoProducto.nombreProducto
            }
        })
        if(tipoProductoFound){
            return new HttpException('tipoProducto already exists', HttpStatus.BAD_REQUEST)
        }
        const newTipoProducto = this.TipoProductoRepository.create(tipoProducto);
        await this.TipoProductoRepository.save(newTipoProducto);
        return newTipoProducto;
    }

    //Metodo que actualiza un tipo de producto por su id con htttp Exception
    async updateTipoProducto(id: number, tipoProducto: UpdateTipoProductoDto){
        const tipoProductoFound = await this.TipoProductoRepository.findOne({
            where: {
                id
            }
        })
        if(!tipoProductoFound){
            return new HttpException('tipoProducto not found', HttpStatus.NOT_FOUND)
        }
        const updateTipoProducto = Object.assign(tipoProductoFound, tipoProducto)
        return this.TipoProductoRepository.save(updateTipoProducto)
    }
}



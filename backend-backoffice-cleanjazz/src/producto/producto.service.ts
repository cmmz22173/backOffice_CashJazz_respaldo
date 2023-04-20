import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { createProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {

    constructor(@InjectRepository(Producto) private productoRepository: Repository<Producto>) { }

    //metodo para insertar productos con httpException
    async createProducto(Producto: createProductoDto){
        const productoFound = await this.productoRepository.findOne({
            where: {
                tipoProducto: Producto.tipoProductoId,
            }
        })
        if(productoFound){
            return new HttpException('producto already exists', HttpStatus.CONFLICT)
        }
        const newProducto = this.productoRepository.create(Producto)
        return this.productoRepository.save(newProducto)
    }

    //metodo para obtener todos los productos
    getProductos(){
        return this.productoRepository.find(
            {where: {estado: 'activo'}}
        )
    }

    //metodo para obtener un usuario por id con httpException
    async getproducto(id: number){
        const productoFound = await this.productoRepository.findOne({
            where: {
                id
            }
        })
        if(!productoFound){
            return new HttpException('producto not found', HttpStatus.NOT_FOUND)
        }
        return productoFound;
    }

    //metodo para borrar Usuario con httpException
    async deleteproducto(id: number){
        
        const productoFound = await this.productoRepository.findOne({
            where: {
                id}
        })
        if(!productoFound){
            return new HttpException('producto not found', HttpStatus.NOT_FOUND)
        }

        const updateProducto = Object.assign(productoFound, {estado: 'inactivo'})
        return this.productoRepository.save(updateProducto)
    }

    //metodo para actualizar Usuario con httpException

    async updateProducto(id: number, producto: UpdateProductoDto){
        const productoFound = await this.productoRepository.findOne({
            where: {
                id
            }
        })
        if(!productoFound){
            return new HttpException('producto not found', HttpStatus.NOT_FOUND)
        }
        const updateproducto = Object.assign(productoFound, producto)
        return this.productoRepository.save(updateproducto)

    }
}

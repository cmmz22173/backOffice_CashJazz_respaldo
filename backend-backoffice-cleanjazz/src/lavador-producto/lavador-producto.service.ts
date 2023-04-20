import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { lavadorProducto } from './lavador-producto.entity';
import { CreateLavadorProductoDto } from './dto/create-lavador-producto.dto';
import { UpdateLavadorProductoDto } from './dto/update-lavador-producto.dto';
@Injectable()
export class LavadorProductoService {

    constructor(@InjectRepository(lavadorProducto) private lavadorProductoRepository: Repository<lavadorProducto>) { }

    //metodo para insertar un registro en la tabla lavadorProducto con httpsException
    async create(createLavadorProductoDto: CreateLavadorProductoDto) {
        try {
            const LavadorProducto = this.lavadorProductoRepository.create(createLavadorProductoDto);
            return await this.lavadorProductoRepository.save(LavadorProducto);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
            }, HttpStatus.BAD_REQUEST);
        }
    }
    
    //metodo para listar todos los registros de la tabla lavadorProducto con httpsException
    async findAll() {
        try {
            return await this.lavadorProductoRepository.find();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    //metodo para listar un registro de la tabla lavadorProducto mediante el id del vehiculo y del servicio con httpsException
    async findOne(lavadorId: number, productoId:number){
        try {
            return await this.lavadorProductoRepository.findOneOrFail({where:{lavador:lavadorId, producto:productoId}});
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: error.message,
            }, HttpStatus.NOT_FOUND);
        }

    } 

    //metodo para actualizar un registro de la tabla lavadorProducto mediante el id del vehiculo y del servicio con httpsException
    async update(lavadorId: number, productoId:number, updateLavadorProductoDto: UpdateLavadorProductoDto) {
        try {
            const LavadorProducto = await this.lavadorProductoRepository.findOneOrFail({where:{lavador:lavadorId, producto:productoId}});
            const updateLavadorProducto = Object.assign(LavadorProducto, updateLavadorProductoDto);
            return await this.lavadorProductoRepository.save(updateLavadorProducto);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: error.message,
            }, HttpStatus.NOT_FOUND);
        }
    }
}

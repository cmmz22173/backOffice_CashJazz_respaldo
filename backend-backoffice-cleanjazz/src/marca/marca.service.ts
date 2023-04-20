import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { marca } from './marca.entity';
import { CreateMarcaDto } from './dto/create_marca.dto';
import { UpdateMarcaDto } from './dto/update_marca.dto';

@Injectable()
export class MarcaService {

    constructor( @InjectRepository(marca) private marcaRepository: Repository<marca> ) {}

    // para insertar marca con httpException
    async createMarca(marca: CreateMarcaDto){
        const marcaFound = await this.marcaRepository.findOne({
            where: {
                nombreMarca: marca.nombreMarca
            }
        })
        if(marcaFound){
            return new HttpException('Marca already exists', HttpStatus.CONFLICT)
        }
        const newMarca = this.marcaRepository.create(marca)
        return this.marcaRepository.save(newMarca)
    }

    // para obtener todas las marcas con httpException
    async getMarcas(){
        const marcasFound = await this.marcaRepository.find()
        if(!marcasFound){
            return new HttpException('Marcas not found', HttpStatus.NOT_FOUND)
        }
        return marcasFound;
    }

    // para obtener una marca con httpException
    async getMarca(id: number){
        const marcaFound = await this.marcaRepository.findOne({
            where: {
                id
            }
        })
        if(!marcaFound){
            return new HttpException('Marca not found', HttpStatus.NOT_FOUND)
        }
        return marcaFound;
    }
                

    // para actualizar marca con httpException
    async updateMarca(id: number, marca: UpdateMarcaDto){
            
            const marcaFound = await this.marcaRepository.findOne({
                where: {
                    id
                }
            })
            if(!marcaFound){
                return new HttpException('Marca not found', HttpStatus.NOT_FOUND)
            }
            const updateMarca = Object.assign(marcaFound, marca)
            return this.marcaRepository.save(updateMarca)
        }

        

    
}

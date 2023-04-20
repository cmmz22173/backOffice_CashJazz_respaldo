import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { modelo } from './modelo.entity';
import { Repository } from 'typeorm';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { CreateModeloDto } from './dto/create-modelo.dto';

@Injectable()
export class ModeloService {

    constructor(@InjectRepository(modelo) private modeloRepository: Repository<modelo>) { }

    //metodo para insertar modelo con httpException
    async createModelo(modelo: CreateModeloDto){
        const modeloFound = await this.modeloRepository.findOne({
            where: {
                nombreModelo: modelo.nombreModelo
            }
        })
        if(modeloFound){
            return new HttpException('Modelo already exists', HttpStatus.CONFLICT)
        }
        const newModelo = this.modeloRepository.create(modelo)
        return this.modeloRepository.save(newModelo)
    }

    //metodo para obtener un modelo con httpException
    async getModelo(id: number){
        const modeloFound = await this.modeloRepository.findOne({
            where: {
                id
            }
        })
        if(!modeloFound){
            return new HttpException('Modelo not found', HttpStatus.NOT_FOUND)
        }
        return modeloFound;
    }

    //metodo para obtener todos los modelos con httpException
    async getModelos(){
        const modelosFound = await this.modeloRepository.find()
        if(!modelosFound){
            return new HttpException('Modelos not found', HttpStatus.NOT_FOUND)
        }
        return modelosFound;
    }
    //metodo para actualizar modelo  con httpException
    async updateModelo(id: number, modelo: UpdateModeloDto){
            
            const modeloFound = await this.modeloRepository.findOne({
                where: {
                    id
                }
            })
            if(!modeloFound){
                return new HttpException('Modelo not found', HttpStatus.NOT_FOUND)
            }
            const updateModelo = Object.assign(modeloFound, modelo)
            return this.modeloRepository.save(updateModelo)
        }

        
    
}

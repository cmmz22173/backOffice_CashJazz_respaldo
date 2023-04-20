import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { cliente } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createClienteDto } from './dto/create-cliente.dto';
import { updateClienteDto } from './dto/update-cliente.dto';
@Injectable()
export class ClienteService {

    constructor(@InjectRepository(cliente) private clienteRepository: Repository<cliente>) { }
    //metodo para insertar cliente con httpException
    async createCliente(cliente: createClienteDto){
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                dni: cliente.dni
            }
        })
        if(clienteFound){
            return new HttpException('User already exists', HttpStatus.CONFLICT)
        }
        const newCliente = this.clienteRepository.create(cliente)
        return this.clienteRepository.save(newCliente)
    }

    //metodo para obtener todos los clientes
    getClientes(){
        return this.clienteRepository.find(
            {where: {estado: 'activo'}}
        )
    }

    //metodo para obtener un cliente por id con httpException
    async getCliente(id: number){
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                id
            }
        })
        if(!clienteFound){
            return new HttpException('Cliente not found', HttpStatus.NOT_FOUND)
        }
        return clienteFound;
    }

    //metodo para actualizar Cliente con httpException

    async updateCliente(id: number, cliente: updateClienteDto){
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                id
            }
        })
        if(!clienteFound){
            return new HttpException('Cliente not found', HttpStatus.NOT_FOUND)
        }
        const updateCliente = Object.assign(clienteFound, cliente)
        return this.clienteRepository.save(updateCliente)
    }

    //metodo para hacer soft delete de un cliente con httpException
    async deleteCliente(id: number){
        const clienteFound = await this.clienteRepository.findOne({
            where: {
                id
            }
        })
        if(!clienteFound){
            return new HttpException('Cliente not found', HttpStatus.NOT_FOUND)
        }
        const softDeleteCliente = Object.assign(clienteFound, {estado: 'inactivo'})
        return this.clienteRepository.save(softDeleteCliente)
    }



}

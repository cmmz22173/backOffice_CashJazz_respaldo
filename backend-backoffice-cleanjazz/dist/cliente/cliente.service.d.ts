import { HttpException } from '@nestjs/common';
import { cliente } from './cliente.entity';
import { Repository } from 'typeorm';
import { createClienteDto } from './dto/create-cliente.dto';
import { updateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteService {
    private clienteRepository;
    constructor(clienteRepository: Repository<cliente>);
    createCliente(cliente: createClienteDto): Promise<cliente | HttpException>;
    getClientes(): Promise<cliente[]>;
    getCliente(id: number): Promise<cliente | HttpException>;
    updateCliente(id: number, cliente: updateClienteDto): Promise<HttpException | (cliente & updateClienteDto)>;
    deleteCliente(id: number): Promise<HttpException | (cliente & {
        estado: string;
    })>;
}

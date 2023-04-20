import { ClienteService } from './cliente.service';
import { createClienteDto } from './dto/create-cliente.dto';
import { updateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    createCliente(newCliente: createClienteDto): Promise<import("./cliente.entity").cliente | import("@nestjs/common").HttpException>;
    getCliente(id: number): Promise<import("./cliente.entity").cliente | import("@nestjs/common").HttpException>;
    deleteCliente(id: number): Promise<import("@nestjs/common").HttpException | (import("./cliente.entity").cliente & {
        estado: string;
    })>;
    getClientes(): Promise<import("./cliente.entity").cliente[]>;
    updateCliente(id: number, cliente: updateClienteDto): Promise<import("@nestjs/common").HttpException | (import("./cliente.entity").cliente & updateClienteDto)>;
}

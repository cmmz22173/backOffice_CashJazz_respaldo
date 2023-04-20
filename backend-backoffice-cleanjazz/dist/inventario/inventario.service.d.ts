import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { Inventario } from './inventario.entity';
export declare class InventarioService {
    private InventarioRepository;
    constructor(InventarioRepository: Repository<Inventario>);
    createInventario(Inventario: CreateInventarioDto): Promise<Inventario | HttpException>;
    getInventarios(): Promise<Inventario[]>;
    getInventario(id: number): Promise<Inventario | HttpException>;
    updateInventario(id: number, user: UpdateInventarioDto): Promise<HttpException | (Inventario & typeof Inventario)>;
}

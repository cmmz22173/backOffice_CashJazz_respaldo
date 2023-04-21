import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TipoProducto } from './tipo-producto.entity';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';
export declare class TipoProductoService {
    private TipoProductoRepository;
    constructor(TipoProductoRepository: Repository<TipoProducto>);
    getTipoProductos(): Promise<TipoProducto[]>;
    getTipoProducto(id: number): Promise<HttpException | TipoProducto>;
    createTipoProducto(tipoProducto: CreateTipoProductoDto): Promise<HttpException | TipoProducto>;
    updateTipoProducto(id: number, tipoProducto: UpdateTipoProductoDto): Promise<HttpException | (TipoProducto & UpdateTipoProductoDto)>;
}

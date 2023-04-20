import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TipoProducto } from './tipo-producto.entity';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';
export declare class TipoProductoService {
    private TipoProductoRepository;
    constructor(TipoProductoRepository: Repository<TipoProducto>);
    getTipoProductos(): Promise<TipoProducto[]>;
    getTipoProducto(id: number): Promise<TipoProducto | HttpException>;
    createTipoProducto(tipoProducto: CreateTipoProductoDto): Promise<TipoProducto | HttpException>;
    updateTipoProducto(id: number, tipoProducto: UpdateTipoProductoDto): Promise<HttpException | (TipoProducto & UpdateTipoProductoDto)>;
}

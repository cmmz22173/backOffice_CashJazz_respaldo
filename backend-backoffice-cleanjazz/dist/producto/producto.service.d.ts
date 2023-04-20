import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { createProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductoService {
    private productoRepository;
    constructor(productoRepository: Repository<Producto>);
    createProducto(Producto: createProductoDto): Promise<Producto | HttpException>;
    getProductos(): Promise<Producto[]>;
    getproducto(id: number): Promise<Producto | HttpException>;
    deleteproducto(id: number): Promise<HttpException | (Producto & {
        estado: string;
    })>;
    updateProducto(id: number, producto: UpdateProductoDto): Promise<HttpException | (Producto & UpdateProductoDto)>;
}

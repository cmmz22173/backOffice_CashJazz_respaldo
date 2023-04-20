import { ProductoService } from './producto.service';
import { createProductoDto } from './dto/create-producto.dto';
import { Producto } from './producto.entity';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductoController {
    private productoService;
    constructor(productoService: ProductoService);
    createproducto(newproducto: createProductoDto): Promise<import("@nestjs/common").HttpException | Producto>;
    getProductos(): Promise<Producto[]>;
    getproducto(id: number): Promise<import("@nestjs/common").HttpException | Producto>;
    deleteproducto(id: number): Promise<import("@nestjs/common").HttpException | (Producto & {
        estado: string;
    })>;
    updateproducto(id: number, producto: UpdateProductoDto): Promise<import("@nestjs/common").HttpException | (Producto & UpdateProductoDto)>;
}

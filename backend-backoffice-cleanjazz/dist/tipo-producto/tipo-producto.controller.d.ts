import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';
import { TipoProductoService } from './tipo-producto.service';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { TipoProducto } from './tipo-producto.entity';
export declare class TipoProductoController {
    private tipoProductoService;
    constructor(tipoProductoService: TipoProductoService);
    createtipoProducto(newtipoProducto: CreateTipoProductoDto): Promise<import("@nestjs/common").HttpException | TipoProducto>;
    gettipoProductos(): Promise<TipoProducto[]>;
    gettipoProducto(id: number): Promise<import("@nestjs/common").HttpException | TipoProducto>;
    updatetipoProducto(id: number, tipoProducto: UpdateTipoProductoDto): Promise<import("@nestjs/common").HttpException | (TipoProducto & UpdateTipoProductoDto)>;
}

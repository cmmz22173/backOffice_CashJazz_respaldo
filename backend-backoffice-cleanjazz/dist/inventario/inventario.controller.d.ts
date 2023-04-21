import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './inventario.entity';
import { InventarioService } from './inventario.service';
export declare class InventarioController {
    private InventarioService;
    constructor(InventarioService: InventarioService);
    createInventario(newInventario: CreateInventarioDto): Promise<import("@nestjs/common").HttpException | Inventario>;
    getInventarios(): Promise<Inventario[]>;
    getInventario(id: number): Promise<import("@nestjs/common").HttpException | Inventario>;
    updateInventario(id: number, Inventario: UpdateInventarioDto): Promise<import("@nestjs/common").HttpException | (Inventario & typeof import("./inventario.entity").Inventario)>;
}

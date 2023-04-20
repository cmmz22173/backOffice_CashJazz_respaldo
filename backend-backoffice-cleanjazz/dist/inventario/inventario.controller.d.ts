import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './inventario.entity';
import { InventarioService } from './inventario.service';
export declare class InventarioController {
    private InventarioService;
    constructor(InventarioService: InventarioService);
    createInventario(newInventario: CreateInventarioDto): Promise<Inventario | import("@nestjs/common").HttpException>;
    getInventarios(): Promise<Inventario[]>;
    getInventario(id: number): Promise<Inventario | import("@nestjs/common").HttpException>;
    updateInventario(id: number, Inventario: UpdateInventarioDto): Promise<import("@nestjs/common").HttpException | (Inventario & typeof import("./inventario.entity").Inventario)>;
}

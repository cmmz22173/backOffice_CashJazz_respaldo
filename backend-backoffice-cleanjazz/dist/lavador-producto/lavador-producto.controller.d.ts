import { LavadorProductoService } from './lavador-producto.service';
import { CreateLavadorProductoDto } from './dto/create-lavador-producto.dto';
import { UpdateLavadorProductoDto } from './dto/update-lavador-producto.dto';
export declare class LavadorProductoController {
    private lavadorProductoService;
    constructor(lavadorProductoService: LavadorProductoService);
    createlavadorProducto(newlavadorProducto: CreateLavadorProductoDto): Promise<import("./lavador-producto.entity").lavadorProducto>;
    getlavadorProducto(): Promise<import("./lavador-producto.entity").lavadorProducto[]>;
    getOnelavadorProducto(productoId: number, lavadorId: number): Promise<import("./lavador-producto.entity").lavadorProducto>;
    updatelavadorProducto(productoId: number, lavadorId: number, lavadorProducto: UpdateLavadorProductoDto): Promise<import("./lavador-producto.entity").lavadorProducto & UpdateLavadorProductoDto>;
}

import { Repository } from 'typeorm';
import { lavadorProducto } from './lavador-producto.entity';
import { CreateLavadorProductoDto } from './dto/create-lavador-producto.dto';
import { UpdateLavadorProductoDto } from './dto/update-lavador-producto.dto';
export declare class LavadorProductoService {
    private lavadorProductoRepository;
    constructor(lavadorProductoRepository: Repository<lavadorProducto>);
    create(createLavadorProductoDto: CreateLavadorProductoDto): Promise<lavadorProducto>;
    findAll(): Promise<lavadorProducto[]>;
    findOne(lavadorId: number, productoId: number): Promise<lavadorProducto>;
    update(lavadorId: number, productoId: number, updateLavadorProductoDto: UpdateLavadorProductoDto): Promise<lavadorProducto & UpdateLavadorProductoDto>;
}

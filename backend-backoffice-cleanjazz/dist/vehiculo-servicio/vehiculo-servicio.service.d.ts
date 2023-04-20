import { Repository } from 'typeorm';
import { VehiculoServico } from './vehiculo-servicio.entity';
import { CreateVehiculoServicioDto } from './dto/create-vehiculo-servicio.dto';
import { UpdateVehiculoServicioDto } from './dto/update-vehiculo-servicio.dto';
export declare class VehiculoServicioService {
    private VehiculoServicoRepository;
    constructor(VehiculoServicoRepository: Repository<VehiculoServico>);
    create(createVehiculoServicioDto: CreateVehiculoServicioDto): Promise<VehiculoServico>;
    findAll(): Promise<VehiculoServico[]>;
    findOne(vehiculoId: number, servicioId: number): Promise<VehiculoServico>;
    update(vehiculoId: number, servicioId: number, updateVehiculoServicioDto: UpdateVehiculoServicioDto): Promise<VehiculoServico & UpdateVehiculoServicioDto>;
}

import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
export declare class VehiculoService {
    private vehiculoRepository;
    constructor(vehiculoRepository: any);
    createVehiculo(vehiculo: CreateVehiculoDto): Promise<any>;
    getVehiculos(): Promise<any>;
    getVehiculo(id: number): Promise<any>;
    deleteVehiculo(id: number): Promise<any>;
    updateVehiculo(id: number, vehiculo: UpdateVehiculoDto): Promise<any>;
}

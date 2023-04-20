import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
export declare class VehiculoController {
    private vehiculoService;
    constructor(vehiculoService: VehiculoService);
    createVehiculo(vehiculo: CreateVehiculoDto): Promise<any>;
    getVehiculos(): Promise<any>;
    getVehiculo(id: number): Promise<any>;
    deleteVehiculo(id: number): Promise<any>;
    updateVehiculo(id: number, vehiculo: CreateVehiculoDto): Promise<any>;
}
